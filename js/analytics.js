/**
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 *
 * Below is a modified version of the Google Analytics asynchronous tracking
 * code snippet.  It has been modified to pull the HTTPS version of ga.js
 * instead of the default HTTP version.  It is recommended that you use this
 * snippet instead of the standard tracking snippet provided when setting up
 * a Google Analytics account.
 *
 * See http://code.google.com/apis/analytics/docs/tracking/asyncTracking.html
 * for information on how to use the asynchronous tracking API.
 *
 * If you wish to use this file in your own extension, replace UA-12026369-1
 * with your own Google Analytics account number.  Note that the default code
 * will automatically track a page view for any page this file is included in.
 *
 * When including this file in your code, the best practice is to insert the
 * <script src="analytics.js"></script> include at the top of the <body>
 * section of your pages, after the opening <body> tag.
 */

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3869711-16']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function trackAnalytics(name, value, p1, p2, p3, p4, p5) { 
	try {

		if(p1){ _gaq.push(['_setCustomVar', 1, 'p1', p1, 3]); }
		if(p2){ _gaq.push(['_setCustomVar', 2, 'p2', p2, 3]); }
		if(p3){ _gaq.push(['_setCustomVar', 3, 'p3', p3, 3]); }
		if(p4){ _gaq.push(['_setCustomVar', 4, 'p4', p4, 3]); }
		if(p5){ _gaq.push(['_setCustomVar', 5, 'p5', p5, 3]); }

		_gaq.push(['_trackEvent', name, value]);

	} catch(err) {}

	return false;
}