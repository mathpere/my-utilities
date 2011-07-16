function Base64() {

	function getColumnName(columnName){
		return localStorage[columnName + "-columnname"];
	}
	
	function hasColumn(columnName){
		return parseBool(localStorage[columnName]);
	}

	function appendDbunitColumn(columnName){
		return (hasColumn(columnName) ? '\t&lt;column&gt;'+ getColumnName(columnName) +'&lt;/column&gt;\n' : '');
	}

	function appendDbunitValue(columnName, columnValue){
		if(hasColumn(columnName)){
			if(columnValue){
				return '\t\t&lt;value&gt;' + columnValue + '&lt;/value&gt\n';
			} else {
				return '\t\t&lt;null /&gt;\n';
			}
		} else {
			return '';
		}
	}

	function appendPostgresSQLValue(values, columnName, columnValue, strip){
		if(hasColumn(columnName)){
			if(columnValue){
				values.push('\t' + (strip ? '\'':'') + columnValue + (strip ? '\'':''));
			} else {
				values.push('\tnull');
			}
		}
	}

	function appendPostgresSQLColumn(columns, columnName){
		if(hasColumn(columnName)){
			columns.push('\t'+ getColumnName(columnName));
		}
	}
	
	function FileTemplate(_files) {
	
		var BASE64_TOKEN = "base64,";
	
		var numberOfFiles = _files.length;
		var numberOfFilesLoaded = 0;
	
		var files = [];
	
		template = function() {

			var dbunit = '&lt;table name="media"&gt;\n' +
				appendDbunitColumn("id") +
				appendDbunitColumn("version") +
				appendDbunitColumn("dateAdded") +
				appendDbunitColumn("originalFilename") +
				appendDbunitColumn("contentType") +
				appendDbunitColumn("content") +
				appendDbunitColumn("fileSize") +
				appendDbunitColumn("extension");

			var postgresSQL = '';

			var plain = '';

			for(var i in files) {
				var file = files[i];
				var idx = parseInt(i) + 1;
				var now = new Date();
				var day = now.format("yyyy-mm-dd HH:MM:ss");

				var columns = [];
				appendPostgresSQLColumn(columns, "id") ;
				appendPostgresSQLColumn(columns, "version") ;
				appendPostgresSQLColumn(columns, "originalFilename") ;
				appendPostgresSQLColumn(columns, "contentType") ;
				appendPostgresSQLColumn(columns, "extension") ;
				appendPostgresSQLColumn(columns, "fileSize") ;
				appendPostgresSQLColumn(columns, "dateAdded") ;
				appendPostgresSQLColumn(columns, "content") ;

				var values = [];
				appendPostgresSQLValue(values, "id", idx, false) ;
				appendPostgresSQLValue(values, "version", 1, false) ;
				appendPostgresSQLValue(values, "originalFilename", file.filename, true) ;
				appendPostgresSQLValue(values, "contentType", file.contentType, true) ;
				appendPostgresSQLValue(values, "extension", file.extension, true) ;
				appendPostgresSQLValue(values, "fileSize", file.size, false) ;
				appendPostgresSQLValue(values, "dateAdded", 'to_date(\'' + day + '\', \'YYYY-MM-DD HH24:MI:SS\')', false) ;
				appendPostgresSQLValue(values, "content", 'decode(\'' + file.contentAsBase64 + '\', \'base64\')') ;

				postgresSQL += 'insert into media (\n' + 
										columns.join(',\n') +'\n' +
									')  values (\n' +
										values.join(',\n') +'\n);\n'
									
				dbunit += '\t&lt;row&gt;\n';
				
				dbunit += appendDbunitValue("id", idx);
				dbunit += appendDbunitValue("version", 1);
				dbunit += appendDbunitValue("dateAdded", day);
				dbunit += appendDbunitValue("originalFilename", file.filename);
				dbunit += appendDbunitValue("contentType", file.contentType);
				dbunit += appendDbunitValue("content", file.contentAsBase64);
				dbunit += appendDbunitValue("fileSize", file.size);
				dbunit += appendDbunitValue("extension", file.extension);

				dbunit += '\t&lt;/row&gt;\n';

				plain += '# ' + file.filename + '\n';
				plain += file.contentAsBase64 + '\n';
			}

			dbunit += '&lt;/table&gt;';

		 	$("#dbunit").html('<pre class="xml"><code>' + dbunit + '</code></pre>');
			$("#postgresSQL").html('<pre class="sql"><code>' + postgresSQL + '</code></pre>');
			$("#plain").html('<pre class="plain"><code>' + plain + '</code></pre>');
			
		 	$("#copy-dbunit").html(dbunit);
			$("#copy-postgresSQL").html(postgresSQL);
			$("#copy-plain").html(plain);
			
			$("#base64 #result").show();

			$('pre code').each(function(i, e) {hljs.highlightBlock(e, '    ')});
		}
	
		this.loadFile = function(file, evt){
			var result = evt.target.result;
			var filename = file.name;
			var dotLastIdx = filename.lastIndexOf(".");

			var extension = null;

			if(dotLastIdx > 0){
				extension = filename.substring(dotLastIdx + 1, filename.length)
			}

			var contentType = file.type;
			if(!contentType){
				contentType = 'application/octet-stream';
			}

			trackAnalytics("base64", "loadfile", filename, contentType, file.size);
		
			files.push({ 
				filename: filename, 
				contentType: contentType, 
				size: file.size, 
				contentAsBase64: result.substring(result.indexOf(BASE64_TOKEN) + BASE64_TOKEN.length, result.length), 
				extension:extension
			});
			
			numberOfFilesLoaded++;
		
			if(numberOfFiles == numberOfFilesLoaded){ template(); }
		}
	}

	handleFileSelect = function(evt) {
		evt.stopPropagation();
		evt.preventDefault();

		var files = evt.dataTransfer.files;
		var fileTemplate = new FileTemplate(files);

	   for (var i = 0, file; file = files[i]; i++) {
			var reader = new FileReader();
			reader.onload = (function(_fileTemplate, _file) {
								return function(evt) {
									_fileTemplate.loadFile(_file, evt);
								};
							})(fileTemplate, file);
			reader.readAsDataURL(file);
		}
	}

	handleDragOver = function(evt) {
		evt.stopPropagation();
		evt.preventDefault();
	}
	
	// post init
	var dropZone = document.getElementById('drop_zone');
	dropZone.addEventListener('dragover', handleDragOver, false);
	dropZone.addEventListener('drop', handleFileSelect, false);

	// advanced options	
	$("#base64 .advancedOptions input[type=checkbox]").change(function(){		
		var checked = $(this).is(':checked');
		var settingName = $(this).attr("name");
		
		// update local setting
		localStorage[settingName] = checked;
		
		// update UI
		$("#base64 #" + settingName + "-columnname").attr("disabled", !checked);
		
		trackAnalytics("base64" , "setting", settingName, checked);
	});
	
	$("#base64 .advancedOptions input[type=checkbox]").each(function(index) {
		
		var settingName = $(this).attr("name");
		var settingValue = localStorage[settingName];
		
		if(typeof(settingValue)=='undefined'){
			localStorage[settingName] = true;
		}

		settingValue = parseBool(localStorage[settingName]);

		$(this).attr("checked", settingValue);
		$("#base64 #" + settingName + "-columnname").attr("disabled", !settingValue);
	});
	
	$("#base64 .advancedOptions input[type=text]").change(function(){		
		var settingValue = $(this).val();
		var settingName = $(this).attr("id");
		
		// update local setting
		localStorage[settingName] = settingValue;
		
		trackAnalytics("base64" , "setting", settingName, settingValue);
	});
	
	$("#base64 .advancedOptions input[type=text]").each(function(index) {
		
		var settingName = $(this).attr("id");
		var settingValue = localStorage[settingName];
		
		if(typeof(settingValue)=='undefined'){ 
			localStorage[settingName] = $(this).attr("defaultValue");
		}
		
		$(this).val(localStorage[settingName]);
	});
}
