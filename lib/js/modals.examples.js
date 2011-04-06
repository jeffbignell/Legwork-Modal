/****************************************************
 * Copyright © Legwork Studio. All Rights Reserved. *
 * Updated by: Matt Wiggins, 05-Apr-2011            *
 *                                                  *
 * Now let's get serious.                          *
 ****************************************************
/                                                  */

var Modals = Modals || {};

(function($) {
	var $self = this;
	
	$self.Examples = (function() {
		var $wn, $a;
		var public = {};
		
		/****************************************************
		 * init:void                                        *
		 *                                                  *
		 * Not much to say here, how's the weather?         *
		 ****************************************************
		/                                                  */
		public.init = function() {
			// unqueue
			try {
				$self.unqueue();
			} catch(e) {}
			
			$wn = $(window);
			$a =  $('#wrapper a');
			
			_observeSomeSweetEvents();
		}
		
		/****************************************************
		 * _observeSomeSweetEvents:void                     *
		 *                                                  *
		 * Add event listeners.                             *
		 ****************************************************
		/                                                  */
		function _observeSomeSweetEvents() {
			$a.click(function(e) {
				e.preventDefault();
				
				$r = $(e.target);
				$m = $($r.attr('href'));
				
				$m.modal({
					background: ['#000', 'none', 0.85, true],
					openNow: true
				});
			});
		}
		
		return public;
	})();
	
	$self.Construct = (function() {
		$(document).ready(Modals.Examples.init());
	})();
}).call(Modals, jQuery);