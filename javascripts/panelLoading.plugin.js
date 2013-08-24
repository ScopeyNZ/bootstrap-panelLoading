(function($){
	"use strict";
	$.fn.panelLoading = function( options ){

		var settings = $.extend({
			setLoading: 	null,
			color:			'#fff',
			opacity: 		'0.8',
			text: 			'Loading...',
			textClass: 		'text-info',
			loaderClass: 	'progress-striped active',
			loaderWidth:	'100%',
			fadeDuration:	500,
			fromTop:		false,
		}, options);
		
		// If .setLoading is unset, check if this panel is loading already:
		if(settings.setLoading === null){
			// It is loading, we will be stopping the load:
			if(this.hasClass('panel-loading-base-element')){
				settings.setLoading = false;
			}
			else{
				settings.setLoading = true;
			}
		}
		
		var setLoad = settings.setLoading,
		
			fadeDuration = parseInt(settings.fadeDuration, 10),
			
			removeLoadStuff = function( $basePanel ){
				if($basePanel.hasClass('panel-loading-base-element')){
					$basePanel.removeClass('panel-loading-base-element');
				}
				if($basePanel.children('.panel-loading-container').length > 0){
					$basePanel.children('.panel-loading-container').contents().unwrap();
				}
			};
		
		if(setLoad){
			if(!this.hasClass('panel-loading-base-element')){
				this.addClass('panel-loading-base-element');
			}
			// Initialize the loading panel
			var $innerWrapper = $('<div class="panel-loading-container" />')
					.height(this.outerHeight()),
				$overlay = $('<div class="panel-loading-overlay" />')	
					.width(this.outerWidth() - parseFloat(this.css('border-left-width')) - parseFloat(this.css('border-right-width')))
					.height(this.outerHeight() - parseFloat(this.css('border-top-width')) - parseFloat(this.css('border-bottom-width')))
					.css({
						'border-radius': this.css('border-radius'),
						'background-color': settings.color,
						'opacity': settings.opacity,
						'filter': 'alpha(opacity=' + (parseInt(settings.opacity, 10) * 100 ).toString() + ')',
						'left': '-'+this.css('padding-left'),
						'top': '-'+this.css('padding-top')
					})
					.hide(),
				$loadingPanel = $('<div class="panel-loading-info-panel" />')
					.css({
						'top': (settings.fromTop && typeof settings.fromTop === 'number') ? settings.fromTop+'px' : '50%',
					})
					.append(
							$('<div class="progress '+settings.loaderClass+'" />').append(
									$('<div class="bar" />').width(settings.loaderWidth)
							)
					)
					.hide();
			
			// Wrap the contents of the div in the container.
			this.wrapInner($innerWrapper);
			
			this.children(':first').append($overlay);
			$overlay.fadeIn(fadeDuration);
			
			if(settings.text){
				$loadingPanel.prepend(
						$('<span class="'+settings.textClass+'" />').html(settings.text)
				);
			}
			this.children(':first').append($loadingPanel);
			$loadingPanel.css('margin-top', ($loadingPanel.height() / 2) * -1)
						 .fadeIn(fadeDuration);
		}
		else{			
			var $overlay = this.find('div.panel-loading-overlay'),
				$loadingPanel = this.find('div.panel-loading-info-panel'),
				$basePanel = this;
			
			if($overlay.length < 1){
				removeLoadStuff($basePanel);
			}
			
			$loadingPanel.fadeOut(fadeDuration, function(){
				$(this).remove();
			});
			$overlay.fadeOut(fadeDuration, function(){
				$(this).remove();
				removeLoadStuff($basePanel);
			});
		}
		return this;
	};
}( jQuery ));