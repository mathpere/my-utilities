function EscapeUtils() {

	unescapeFromString = function(str, encoding) {
		return str;
	}

	escapeToString = function(str, encoding) {
		return str;
	}

	escapeSingleQuoteAndBackSlash = function(value) {
		value = value.replace(/\\/g, '\\\\\\\\');
		value = value.replace(/\'/g, '\\\\\\\'');
		return value;
	}

	// post init
	$('#escapeutils textarea').keyup(function() {

		var id = $(this).attr('id');
		var value = $(this).val();

		var _unescape = eval($(this).attr('unescape'));

		valueUnescaped = _unescape(value, 'UTF-8');

		$('#escapeutils textarea').each(function(index) {

			if (id != $(this).attr('id')) {
				try {

					var _escape = eval($(this).attr('escape'));

					var valueEscaped = _escape(valueUnescaped, 'UTF-8');
					$(this).val(valueEscaped);

				} catch(ex) {
					console.log($(this).attr('id') + ': ' + ex);
				}
			}
		});
	});
}
