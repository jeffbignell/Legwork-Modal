/****************************************************
 * Copyright © Legwork Studio. All Rights Reserved. *
 * Updated by: Matt Wiggins, 05-Apr-2011            *
 *                                                  *
 * Let's get this party started.                    *
 ****************************************************
/                                                  */

var Modals = Modals || {};

(function(Modals) {
	
	// No JS? What gives ...
	try {
		var html = document.getElementsByTagName('html')[0];
		html.className = "js";
	} catch(e){}
	
	// Queue up stuff throughout the body that needs
	// to happen after DOM Ready.
	var queue = [];
	
	Modals.queue = function() {
		for (var i = -1, func; func = arguments[++i];) {
			queue[queue.length] = func;
		}
	};
	
	Modals.unqueue = function() {
		var func;
		while (func = queue.shift()) {
			func();
		}
	};
}(Modals));