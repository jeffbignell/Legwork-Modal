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
		var $wn, $a, $m6, $m7;
		var public = {};
		
		/****************************************************
		 * init:void                                        *
		 *                                                  *
		 * Not much to say here, how's the weather?         *
		 ****************************************************
		/                                                  */
		public.init = function() {
			$wn = $(window);
			$a =  $('a');
			
		  $m6 = $('#example-6').modal({
				background: ['#000', 'none', 0.85, true],
				destroyOnClose: false
			});
			
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
				
				var $r;
				
				$r = $(e.target);
				switch($r.attr('href')) {
					case '#example-1':
						$('#example-1').modal({
    					background: ['#000', 'none', 0.85, true],
    					openNow: true
    				});
						break;
					case '#example-2':
						$('<div id="example-2"></div>').css({'width':'400px', 'height':'300px', 'background-color':'#fff'}).modal({
    					background: ['#000', 'none', 0.85, true],
    					openNow: true
    				});
						break;
					case '#example-3':
						$('<div id="example-3"></div>').css({'width':'640px', 'height':'480px', 'background-color':'#fff'}).modal({
    					background: ['#000', 'none', 0.85, true],
    					placement: ['20px', '50%', '0px', '-320px', 'absolute'],
    					openNow: true
    				});
						break;
					case '#example-4':
						$('#example-4').modal({
    					background: ['#000', 'none', 0.85, true],
    					openNow: true,
    					onOpened: function() {
                alert('opened');
    					},
    					onClosed: function() {
                alert('closed');
    					}
    				});
						break;
					case '#example-5':
						$('#example-5').modal({
    					background: ['', 'lib/img/example-bg.png', 1, true],
    					openNow: true
    				});
						break;
					case '#example-6':
    				$m6.modal('open');
						break;
					case '#example-7':
						$m7 = $('#example-7').modal({
    					background: ['#000', 'none', 0.85, true],
    					openNow: true
    				});
						break;
				  case '#example-7-close':
				    $m7.modal('close');
				    break;
					case '#example-8':
						$('#example-8').modal({
    					background: ['#000', 'none', 0.85, true],
    					openNow: true
    				});
						break;
          case '#example-8-2':
						$('#example-8').modal({
    					background: ['#f00', 'none', 0.85, true],
    					placement: ['20px', '50%', '0px', '-360px', 'fixed'],
    					openNow: true
    				});
						break;
					case '#example-9':
						$('#example-9').modal({
    					background: ['#000', 'none', 0.85, true],
    					clone: true,
    					openNow: true
    				});
						break;
				}
				
				$('#example-3').live('click', function() {
				  $(this).animate({'height':'600px'}, 500, 'swing');
				});
			});
		}
		
		return public;
	})();
	
	$self.Construct = (function() {
		$(document).ready(Modals.Examples.init());
	})();
}).call(Modals, jQuery);