// menu
$("nav a").live("click", function(evt){
	evt.stopPropagation();
	evt.preventDefault();
	
	$(".main").addClass("hidden");
	$($(this).attr("href")).removeClass("hidden");
	
	$("nav a").removeClass("active");
	$(this).addClass("active");
	
	trackAnalytics("clickmenu", $(this).attr("href"));
});

function parseBool(value) {
  if (typeof value === "string") {
     value = value.replace(/^\s+|\s+$/g, "").toLowerCase();
     if (value === "true" || value === "false")
       return value === "true";
  }
  return; // returns undefined
}

$(function() {
	new Base64;
	new EscapeUtils;

	$(".copy").click(function(evt){
		
		var toCopy = $(this).attr("toCopy");
		
		if( toCopy ){
			var input = document.getElementById( toCopy );
			chrome.extension.sendRequest({ text: input.value });
		} else {
			alert("not yet implemented :-(");
		}
	});
});