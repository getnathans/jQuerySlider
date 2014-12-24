//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//	Plugin Name	: 	jquery.image.Slider
//	Description	: 	This is a jQuery plugin that can be used to slide or fade set images in your webpage
//	Version		: 	1.0.0
//	Author		: 	Nathan Senevirathne
//	Author URI	: 	http://www.brightkidz.com.au
//	Created Date: 	24/12/2014
// 	Instructions: 	Please read the instructions on readme file to find how to use it. 
//					If you find any bug or any concern please let me know. Thanks for using it!
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(function($){
	$.fn.imageSlider = function(options){
		//Default Settings
		var settings = $.extend({
			speed 		: 2100,
			pause 		: 5000,
			transition	: 'slide',
			border		: true,
			borderColor	: '#000000',
			borderWidth : 10
		}, options);
		
		//if the speed and puase values are too small, it will not give you a good transition
		//Therefore, speed and pause values are set to 1000 and 2000 as smallest values
		if(settings.speed < 1000)	settings.speed = 1000;
		if(settings.pause < 1000)	settings.pause = 2000;	
		
		var _maxNumberOfImages = 100;
		
		//Error message
		var errorMassage = {
			tooManyImages : "You have passed  too many images to slide!"
		};
		
		//CSS class for error messages
		var cssError = {
			color 	: '#000099',
			border	: '1px solid red',
			width	: '300px',
			padding : '5px'
		};
		
		//Iterate the li elements held by unordered list
		this.each(function() {
			var $this = $(this);
			
			var maxWidthOfImg = maxHeightOfImg = 0;
			var W = H = k = 0;
			
			$this.children().each(function(index) {
				var img = $(this).find('img');
				W = img.width();
				H = img.height();
				if(W > maxWidthOfImg)
					maxWidthOfImg = W;
				if(H > maxHeightOfImg)
					maxHeightOfImg = H;
			});
			
			console.log("maxWidthOfImg=" + maxWidthOfImg + "::maxHeightOfImg=" + maxHeightOfImg);
			
			//Wrap a "div" element around the unordered list
			$this.wrap("<div id='slider-wrapper-div' class='slider-wrapper'></div>");
			
			//If the user has passed too many images to slide it will return with an error message
			if($this.children().length > _maxNumberOfImages) {
				$("#slider-wrapper-div").css(cssError);
				$("#slider-wrapper-div").html(errorMassage.tooManyImages);
				return;
			};
			
			//If the option is "slide"
			if(settings.transition === 'slide')	{
				//CSS class for unordered list
				$this.css({
					'width'		: ($this.children().length * 1000) + 'px',
					'position'	: 'relative',
					'padding'	: '0px',
					'margin'	: '0px'
				});
				
				//CSS for list items
				$this.children().css({
					'float' 	: 'left',
					'list-style': 'none',
					'padding'	: '0px',
					'margin'	: '0px'
				});
				
				//CSS class for slider-wrapper
				$('.slider-wrapper').css({
					'width' 	: maxWidthOfImg + 'px',
					'height' 	: maxHeightOfImg + 'px',
					'overflow'	: 'hidden',
					'padding'	: '0px',
					'margin'	: '0px'
				});
				
				slide();
			};
			
			//If the option is "fade"
			if(settings.transition === 'fade')	{
				//CSS for unordered list
				$this.css({
					'position'	: 'relative',
					'padding'	: '0px',
					'margin'	: '0px'
				});
				
				
				//CSS for list items
				$this.children().css({
					'width' 	: maxWidthOfImg + 'px',
					'position'	: 'absolute',
					'left'		: '0px',
					'padding'	: '0px',
					'margin'	: '0px',
					'display'	: 'block',
					'top'		: '0px'
				});
				
				//To push the last image to bottom, loop through each child and change the z-index
				var i = $this.children().length - 1;
				var y = 0;
				for(i; i>=0; i--) {
					$this.children().eq(y).css('zIndex', (i+999));
					y++;
				}
				
				//CSS class for slider-wrapper
				$('.slider-wrapper').css({
					'width' 	:  maxWidthOfImg + 'px',
					'height' 	: maxHeightOfImg + 'px',
					'overflow'	: 'auto',
					'padding'	: '0px',
					'margin'	: '0px'
				});
				
				fade();	
			}
			 
			 
			//fading function
			function fade() {
				setInterval(function() {
					$this.children(':first').animate(
											{'opacity' : 0}, 
											settings.speed, 
											function() {
												$this
													.children(':first')
													.css('opacity', 1)
													.css('zIndex', $this.children(':last').css('zIndex')-1)
													.appendTo($this);
											})
				
				}, settings.pause);
			}
			
			//Sliding function
			function slide() {
				setInterval(function() {
					$this.animate({'left' : '-' + $this.parent().width()}
								, settings.speed, function() {
								$this
									.css('left',0)
									.children(':first')
									.appendTo($this);
								})
				
				}, settings.pause);
			}
			
			
			//If user needs a border
			if(settings.border) {
				$("#slider-wrapper-div").css({"border-color": settings.borderColor, 
												"border-width":settings.borderWidth + 'px', 
												"border-style":'solid'});
			}
		
		});
	}
})(jQuery);