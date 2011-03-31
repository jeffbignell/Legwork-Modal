/*************************************************** 
 * Copyright © 2011 Legwork. All Rights Reserved.  *
 * Updated by: Matt Wiggins, 02-Mar-2011           *
 *                                                 *
 * Legwork modals have magical powers.             *
 ***************************************************
/                                                 */

// v0.1
;(function($) {

	// settings
	var settings = {
		background:'none',
		closeBtn:'none',
		openNow:false,
		closeOnBgClick:false,
		onOpened:null,
		onClosed:null
	}
	
	var open = false;
	var $bg = null;
	var $close = null;
	
	// methods
	var methods = {
		init:function(options) {
			return this.each(function() {
				$.extend(settings, options);
				var $this = $(this);
				if(settings.openNow) methods['open'].call($this);
			});
		},
		
		open:function(callback) {
			return this.each(function() {
				if(typeof callback == 'function') settings.onOpened = callback;
				
				var $this = $(this);
				
				$this.css('display', 'none');
				
				$close = settings.closeBtn == 'none' ? null : $('<div></div>')
				.css({
					'position':'absolute',
					'top':'10px',
					'right':'10px',
					'width':'12px',
					'height':'12px',
					'background':'url(' + settings.closeBtn + ') top left no-repeat',
					'cursor':'pointer'
				})
				.appendTo($this)
				.bind('click', function() {
					methods['close'].call($this);
				});
				
				$bg = $('<div></div>')
				.css({
					'position':'fixed',
					'top':'0px',
					'left':'0px',
					'width':'100%',
					'height':'100%',
					'background':settings.background == 'none' ? '#000' : 'url(' + settings.background + ') top left repeat',
					'z-index':'49000',
					'display':'none'
				})
				.appendTo('body')
				.bind('click', function() {
					if(settings.closeOnBgClick) methods['close'].call($this);
				})
				.fadeIn('slow', function() {
					$this.css({
						'position':'fixed',
						'top':'50%',
						'left':'50%',
						'margin-left':-Math.round($this.outerWidth() / 2) + 'px',
						'margin-top':-Math.round($this.outerHeight() / 2) + 'px',
						'z-index':'49500',
						'display':'block'
					});
					
					if(typeof settings.onOpened == 'function') settings.onOpened.call($this);
				});
			});
		},
		
		close:function(callback) {
			return this.each(function() {
				if(typeof callback == 'function') settings.onClosed = callback;
				
				var $this = $(this);
				
				$this.attr('style', '').hide();
				$bg.fadeOut('slow', function() {
					$bg.remove();
					if(typeof settings.onClosed == 'function') settings.onClosed.call($this);
				})
			});
		}
	}
	
	// extend
	$.fn.modal = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error( 'Method ' +  method + ' does not exist on jquery.legwork-modal' );
		}
	}
})(jQuery);