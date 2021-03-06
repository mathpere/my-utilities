function escapeToHtml(str) {
	str = str.replace(/&/g,'&amp;');     
	str = str.replace(/"/g,'&quot;');    
	str = str.replace(/\'/g,'&#39;');    
	str = str.replace(/</g,'&lt;');      
	str = str.replace(/>/g,'&gt;');      
	str = str.replace(/\^/g,'&circ;');   
	str = str.replace(/�/g,'&lsquo;');   
	str = str.replace(/�/g,'&rsquo;');   
	str = str.replace(/�/g,'&ldquo;');   
	str = str.replace(/�/g,'&rdquo;');   
	str = str.replace(/�/g,'&bull;');    
	str = str.replace(/�/g,'&ndash;');   
	str = str.replace(/�/g,'&mdash;');   
	str = str.replace(/�/g,'&tilde;');    
	str = str.replace(/�/g,'&trade;');   
	str = str.replace(/�/g,'&scaron;');  
	str = str.replace(/�/g,'&rsaquo;');  
	str = str.replace(/�/g,'&oelig;');   
	str = str.replace(/�/g,'&#357;');     
	str = str.replace(/�/g,'&#382;');    
	str = str.replace(/�/g,'&Yuml;');    
	str = str.replace(/ /g,'&nbsp;');    
	str = str.replace(/�/g,'&iexcl;');   
	str = str.replace(/�/g,'&cent;');    
	str = str.replace(/�/g,'&pound;');   
	str = str.replace(/ /g,'&curren;');  
	str = str.replace(/�/g,'&yen;');     
	str = str.replace(/�/g,'&brvbar;');  
	str = str.replace(/�/g,'&sect;');    
	str = str.replace(/�/g,'&uml;');     
	str = str.replace(/�/g,'&copy;');    
	str = str.replace(/�/g,'&ordf;');    
	str = str.replace(/�/g,'&laquo;');   
	str = str.replace(/�/g,'&not;');     
	str = str.replace(/�/g,'&shy;');     
	str = str.replace(/�/g,'&reg;');     
	str = str.replace(/�/g,'&macr;');    
	str = str.replace(/�/g,'&deg;');     
	str = str.replace(/�/g,'&plusmn;');  
	str = str.replace(/�/g,'&sup2;');    
	str = str.replace(/�/g,'&sup3;');    
	str = str.replace(/�/g,'&acute;');   
	str = str.replace(/�/g,'&micro;');   
	str = str.replace(/�/g,'&para');     
	str = str.replace(/�/g,'&middot;');  
	str = str.replace(/�/g,'&cedil;');   
	str = str.replace(/�/g,'&sup1;');    
	str = str.replace(/�/g,'&ordm;');    
	str = str.replace(/�/g,'&raquo;');   
	str = str.replace(/�/g,'&frac14;');  
	str = str.replace(/�/g,'&frac12;');  
	str = str.replace(/�/g,'&frac34;');  
	str = str.replace(/�/g,'&iquest;');  
	str = str.replace(/�/g,'&Agrave;');  
	str = str.replace(/�/g,'&Aacute;');  
	str = str.replace(/�/g,'&Acirc;');   
	str = str.replace(/�/g,'&Atilde;');  
	str = str.replace(/�/g,'&Auml;');    
	str = str.replace(/�/g,'&Aring;');   
	str = str.replace(/�/g,'&AElig;');   
	str = str.replace(/�/g,'&Ccedil;');  
	str = str.replace(/�/g,'&Egrave;');  
	str = str.replace(/�/g,'&Eacute;');  
	str = str.replace(/�/g,'&Ecirc;');   
	str = str.replace(/�/g,'&Euml;');    
	str = str.replace(/�/g,'&Igrave;');  
	str = str.replace(/�/g,'&Iacute;');  
	str = str.replace(/�/g,'&Icirc;');   
	str = str.replace(/�/g,'&Iuml;');    
	str = str.replace(/�/g,'&ETH;');     
	str = str.replace(/�/g,'&Ntilde;');  
	str = str.replace(/�/g,'&Ograve;');  
	str = str.replace(/�/g,'&Oacute;');  
	str = str.replace(/�/g,'&Ocirc;');   
	str = str.replace(/�/g,'&Otilde;');  
	str = str.replace(/�/g,'&Ouml;');    
	str = str.replace(/�/g,'&times;');   
	str = str.replace(/�/g,'&Oslash;');  
	str = str.replace(/�/g,'&Ugrave;');  
	str = str.replace(/�/g,'&Uacute;');  
	str = str.replace(/�/g,'&Ucirc;');   
	str = str.replace(/�/g,'&Uuml;');    
	str = str.replace(/�/g,'&Yacute;');  
	str = str.replace(/�/g,'&THORN;');   
	str = str.replace(/�/g,'&szlig;');   
	str = str.replace(/�/g,'&agrave;');  
	str = str.replace(/�/g,'&aacute;');  
	str = str.replace(/�/g,'&acirc;');   
	str = str.replace(/�/g,'&atilde;');  
	str = str.replace(/�/g,'&auml;');    
	str = str.replace(/�/g,'&aring;');   
	str = str.replace(/�/g,'&aelig;');   
	str = str.replace(/�/g,'&ccedil;');  
	str = str.replace(/�/g,'&egrave;');  
	str = str.replace(/�/g,'&eacute;');  
	str = str.replace(/�/g,'&ecirc;');   
	str = str.replace(/�/g,'&euml;');    
	str = str.replace(/�/g,'&igrave;');  
	str = str.replace(/�/g,'&iacute;');  
	str = str.replace(/�/g,'&icirc;');   
	str = str.replace(/�/g,'&iuml;');    
	str = str.replace(/�/g,'&eth;');     
	str = str.replace(/�/g,'&ntilde;');  
	str = str.replace(/�/g,'&ograve;');  
	str = str.replace(/�/g,'&oacute;');  
	str = str.replace(/�/g,'&ocirc;');   
	str = str.replace(/�/g,'&otilde;');  
	str = str.replace(/�/g,'&ouml;');    
	str = str.replace(/�/g,'&divide;');  
	str = str.replace(/�/g,'&oslash;');  
	str = str.replace(/�/g,'&ugrave;');  
	str = str.replace(/�/g,'&uacute;');  
	str = str.replace(/�/g,'&ucirc;');   
	str = str.replace(/�/g,'&uuml;');    
	str = str.replace(/�/g,'&yacute;');  
	str = str.replace(/�/g,'&thorn;');   
	str = str.replace(/�/g,'&yuml;');    
	return str;
}
function unescapeFromHtml(str) {
	str = str.replace(/&quot;/g,'"');    
	str = str.replace(/&amp;/g,'&');     
	str = str.replace(/&#39;/g,"'");     
	str = str.replace(/&lt;/g,'<');      
	str = str.replace(/&gt;/g,'>');      
	str = str.replace(/&circ;/g,'^');    
	str = str.replace(/&lsquo;/g,'�');   
	str = str.replace(/&rsquo;/g,'�');   
	str = str.replace(/&ldquo;/g,'�');   
	str = str.replace(/&rdquo;/g,'�');   
	str = str.replace(/&bull;/g,'�');    
	str = str.replace(/&ndash;/g,'�');   
	str = str.replace(/&mdash;/g,'�');   
	str = str.replace(/&tilde;/g,'�');    
	str = str.replace(/&trade;/g,'�');   
	str = str.replace(/&scaron;/g,'�');  
	str = str.replace(/&rsaquo;/g,'�');  
	str = str.replace(/&oelig;/g,'�');   
	str = str.replace(/&#357;/g,'�');     
	str = str.replace(/&#382;/g,'�');    
	str = str.replace(/&Yuml;/g,'�');    
	str = str.replace(/&nbsp;/g,' ');    
	str = str.replace(/&iexcl;/g,'�');   
	str = str.replace(/&cent;/g,'�');    
	str = str.replace(/&pound;/g,'�');   
	str = str.replace(/&curren;/g,' ');  
	str = str.replace(/&yen;/g,'�');     
	str = str.replace(/&brvbar;/g,'�');  
	str = str.replace(/&sect;/g,'�');    
	str = str.replace(/&uml;/g,'�');     
	str = str.replace(/&copy;/g,'�');    
	str = str.replace(/&ordf;/g,'�');    
	str = str.replace(/&laquo;/g,'�');   
	str = str.replace(/&not;/g,'�');     
	str = str.replace(/&shy;/g,'�');     
	str = str.replace(/&reg;/g,'�');     
	str = str.replace(/&macr;/g,'�');    
	str = str.replace(/&deg;/g,'�');     
	str = str.replace(/&plusmn;/g,'�');  
	str = str.replace(/&sup2;/g,'�');    
	str = str.replace(/&sup3;/g,'�');    
	str = str.replace(/&acute;/g,'�');   
	str = str.replace(/&micro;/g,'�');   
	str = str.replace(/&para/g,'�');     
	str = str.replace(/&middot;/g,'�');  
	str = str.replace(/&cedil;/g,'�');   
	str = str.replace(/&sup1;/g,'�');    
	str = str.replace(/&ordm;/g,'�');    
	str = str.replace(/&raquo;/g,'�');   
	str = str.replace(/&frac14;/g,'�');  
	str = str.replace(/&frac12;/g,'�');  
	str = str.replace(/&frac34;/g,'�');  
	str = str.replace(/&iquest;/g,'�');  
	str = str.replace(/&Agrave;/g,'�');  
	str = str.replace(/&Aacute;/g,'�');  
	str = str.replace(/&Acirc;/g,'�');   
	str = str.replace(/&Atilde;/g,'�');  
	str = str.replace(/&Auml;/g,'�');    
	str = str.replace(/&Aring;/g,'�');   
	str = str.replace(/&AElig;/g,'�');   
	str = str.replace(/&Ccedil;/g,'�');  
	str = str.replace(/&Egrave;/g,'�');  
	str = str.replace(/&Eacute;/g,'�');  
	str = str.replace(/&Ecirc;/g,'�');   
	str = str.replace(/&Euml;/g,'�');    
	str = str.replace(/&Igrave;/g,'�');  
	str = str.replace(/&Iacute;/g,'�');  
	str = str.replace(/&Icirc;/g,'�');   
	str = str.replace(/&Iuml;/g,'�');    
	str = str.replace(/&ETH;/g,'�');     
	str = str.replace(/&Ntilde;/g,'�');  
	str = str.replace(/&Ograve;/g,'�');  
	str = str.replace(/&Oacute;/g,'�');  
	str = str.replace(/&Ocirc;/g,'�');   
	str = str.replace(/&Otilde;/g,'�');  
	str = str.replace(/&Ouml;/g,'�');    
	str = str.replace(/&times;/g,'�');   
	str = str.replace(/&Oslash;/g,'�');  
	str = str.replace(/&Ugrave;/g,'�');  
	str = str.replace(/&Uacute;/g,'�');  
	str = str.replace(/&Ucirc;/g,'�');   
	str = str.replace(/&Uuml;/g,'�');    
	str = str.replace(/&Yacute;/g,'�');  
	str = str.replace(/&THORN;/g,'�');   
	str = str.replace(/&szlig;/g,'�');   
	str = str.replace(/&agrave;/g,'�');  
	str = str.replace(/&aacute;/g,'�');  
	str = str.replace(/&acirc;/g,'�');   
	str = str.replace(/&atilde;/g,'�');  
	str = str.replace(/&auml;/g,'�');    
	str = str.replace(/&aring;/g,'�');   
	str = str.replace(/&aelig;/g,'�');   
	str = str.replace(/&ccedil;/g,'�');  
	str = str.replace(/&egrave;/g,'�');  
	str = str.replace(/&eacute;/g,'�');  
	str = str.replace(/&ecirc;/g,'�');   
	str = str.replace(/&euml;/g,'�');    
	str = str.replace(/&igrave;/g,'�');  
	str = str.replace(/&iacute;/g,'�');  
	str = str.replace(/&icirc;/g,'�');   
	str = str.replace(/&iuml;/g,'�');    
	str = str.replace(/&eth;/g,'�');     
	str = str.replace(/&ntilde;/g,'�');  
	str = str.replace(/&ograve;/g,'�');  
	str = str.replace(/&oacute;/g,'�');  
	str = str.replace(/&ocirc;/g,'�');   
	str = str.replace(/&otilde;/g,'�');  
	str = str.replace(/&ouml;/g,'�');    
	str = str.replace(/&divide;/g,'�');  
	str = str.replace(/&oslash;/g,'�');  
	str = str.replace(/&ugrave;/g,'�');  
	str = str.replace(/&uacute;/g,'�');  
	str = str.replace(/&ucirc;/g,'�');   
	str = str.replace(/&uuml;/g,'�');    
	str = str.replace(/&yacute;/g,'�');  
	str = str.replace(/&thorn;/g,'�');   
	str = str.replace(/&yuml;/g,'�');    
	return str;
}