jQuery.noConflict();
jQuery(document).ready(function($) {
	
	"use strict";
  
	//Accordion & Toggle
	$('.dt-sc-toggle').toggle(function(){ $(this).addClass('active'); },function(){ $(this).removeClass('active'); });
	$('.dt-sc-toggle').on('click', function(){ $(this).next().slideToggle(); });
	
	$('.dt-sc-toggle-frame-set').each(function(){
		var $this = $(this),
		    $toggle = $this.find('.dt-sc-toggle-accordion');
			
			$toggle.on('click', function(){
				if( $(this).next().is(':hidden') ) {
					$this.find('.dt-sc-toggle-accordion').removeClass('active').next().slideUp();
					$(this).toggleClass('active').next().slideDown();
				}
				return false;
			});
			
			//Activate First Item always
			$this.find('.dt-sc-toggle-accordion:first').addClass("active");
			$this.find('.dt-sc-toggle-accordion:first').next().slideDown();
  	});//Accordion & Toggle
	
	// Tabs Shortcodes
	if ($("ul.dt-sc-tabs").length > 0) {
		$("ul.dt-sc-tabs").tabs("> .dt-sc-tabs-content", {effect: 'fade'})
	}
	if ($("ul.dt-sc-tabs-frame").length > 0) {
		$("ul.dt-sc-tabs-frame").tabs("> .dt-sc-tabs-frame-content", {effect: 'fade'})
	}
	if ($(".dt-sc-tabs-vertical-frame").length > 0) {
		$(".dt-sc-tabs-vertical-frame").tabs("> .dt-sc-tabs-vertical-frame-content", {effect: 'fade'});
		$(".dt-sc-tabs-vertical-frame").each(function() {
			$(this).find("li:first").addClass("first").addClass("current");
			$(this).find("li:last").addClass("last")
		});
		$(".dt-sc-tabs-vertical-frame li").click(function() {
			$(this).parent().children().removeClass("current");
			$(this).addClass("current")
		})
	} /*Tabs Shortcodes Ends*/
	
	/*Tooltip*/
	 if($(".dt-sc-tooltip-bottom").length){
		$(".dt-sc-tooltip-bottom").each(function(){ 
			if($(this).hasClass('dt-sc-button-outlined')) 
				$(this).tipTip({
					maxWidth: "auto",
					enter: function() {
						$('#tiptip_holder').find('#tiptip_arrow').attr('class', 'tooltip-custom-arrow');
						$('#tiptip_holder').find('#tiptip_content').attr('class', 'tooltip-custom-content');
					},
					exit: function() {
						$('#tiptip_holder').find('#tiptip_arrow').removeAttr('class');
						$('#tiptip_holder').find('#tiptip_content').removeAttr('class');
					}
				});
			else $(this).tipTip({maxWidth: "auto"}); 
		});
	 }
	  
	 if($(".dt-sc-tooltip-top").length){
		$(".dt-sc-tooltip-top").each(function(){ 
			if($(this).hasClass('dt-sc-button-outlined')) 
				$(this).tipTip({
					maxWidth: "auto",
					defaultPosition: "top",
					enter: function() {
						$('#tiptip_holder').find('#tiptip_arrow').attr('class', 'tooltip-custom-arrow');
						$('#tiptip_holder').find('#tiptip_content').attr('class', 'tooltip-custom-content');
					},
					exit: function() {
						$('#tiptip_holder').find('#tiptip_arrow').removeAttr('class');
						$('#tiptip_holder').find('#tiptip_content').removeAttr('class');
					}
				});
			else $(this).tipTip({maxWidth: "auto",defaultPosition: "top"}); 
		});
	 }
	  
	 if($(".dt-sc-tooltip-left").length){
		$(".dt-sc-tooltip-left").each(function(){ 
			if($(this).hasClass('dt-sc-button-outlined')) 
				$(this).tipTip({
					maxWidth: "auto",
					defaultPosition: "left",
					enter: function() {
						$('#tiptip_holder').find('#tiptip_arrow').attr('class', 'tooltip-custom-arrow');
						$('#tiptip_holder').find('#tiptip_content').attr('class', 'tooltip-custom-content');
					},
					exit: function() {
						$('#tiptip_holder').find('#tiptip_arrow').removeAttr('class');
						$('#tiptip_holder').find('#tiptip_content').removeAttr('class');
					}
				});
			else $(this).tipTip({maxWidth: "auto",defaultPosition: "left"}); 
		});
	 }
	  
	 if($(".dt-sc-tooltip-right").length){
		$(".dt-sc-tooltip-right").each(function(){ 
			if($(this).hasClass('dt-sc-button-outlined')) 
				$(this).tipTip({
					maxWidth: "auto",
					defaultPosition: "right",
					enter: function() {
						$('#tiptip_holder').find('#tiptip_arrow').attr('class', 'tooltip-custom-arrow');
						$('#tiptip_holder').find('#tiptip_content').attr('class', 'tooltip-custom-content');
					},
					exit: function() {
						$('#tiptip_holder').find('#tiptip_arrow').removeAttr('class');
						$('#tiptip_holder').find('#tiptip_content').removeAttr('class');
					}
				});
			else $(this).tipTip({maxWidth: "auto",defaultPosition: "right"}); 
		});
	 }/*Tooltip End*/

	/* Parallax Section */
	$('.dt-sc-parallax').each(function(){
		$(this).bind('inview', function (event, visible) {
			var $bgposition = (typeof( $(this).attr('data-position') ) != 'undefined' && $(this).attr('data-position') != '') ? $(this).attr('data-position') : "50%";
			if($bgposition == 'center center') { $bgposition = "50%"; }
			if(visible == true) {
				$(this).parallax("left top", 0.3);
			} else {
				$(this).css('background-position','');
			}
		});
	});
	
	//Donutchart
  	$(".dt-sc-donutchart").each(function(){
		var $this = $(this);
	 	var $bgColor =  ( $this.data("bgcolor") !== undefined ) ? $this.data("bgcolor") : "#f5f5f5";
	 	var $fgColor =  ( $this.data("fgcolor") !== undefined ) ? $this.data("fgcolor") : "#000000";
	 	var $size = ( $this.data("size") !== undefined ) ? $this.data("size") : "120";
	 
	 	$this.donutchart({'size': $size, 'fgColor': $fgColor, 'bgColor': $bgColor , 'donutwidth' : 10 });
	 	$this.donutchart('animate');
	});
	
	$(window).on('load', function(){	
	
		// Testimonial Carousel
		if( jQuery('.dt-sc-testimonial-carousel').length ) {
			jQuery('.dt-sc-testimonial-carousel').each(function(){
				var column = jQuery(this).data('column'),
					direction = jQuery(this).parent('.dt-sc-testimonial-wrapper').data('direction'),
					responsive = true;
				if(column != '') column = column; else column = 1;
				if(direction != '') direction = direction; else direction = 'left';
				if(direction == 'up' || direction == 'down') responsive = false; else responsive = true;
				jQuery(this).carouFredSel({
					responsive:responsive,
					direction:direction,
					auto:true,
					width:'100%',
					prev:jQuery(this).parent('.dt-sc-testimonial-wrapper').find('.testimonial-prev'),
					next:jQuery(this).parent('.dt-sc-testimonial-wrapper').find('.testimonial-next'),
					swipe: {onMouse: true, onTouch: true},
					pagination:jQuery(this).parents(".dt-sc-testimonial-wrapper.type2").find(".pager"),
					scroll:1,
					items:{visible: {min: column}, height: 'variable'}
				});
			});
		}
		
		// Team Carousel
		if( jQuery('.dt-sc-team-carousel').length) {
			jQuery('.dt-sc-team-carousel').each(function(){
				  var pagger = jQuery(this).parents(".dt-sc-team-carousel-wrapper").find("div.carousel-arrows"),
					  next = pagger.find("a.next"),
					  prev = pagger.find("a.prev");
	
				jQuery(this).carouFredSel({
					  responsive:true,
					  auto:false,
					  width:'100%',
					  height: 'variable',
					  scroll:1,
					  items:{
						height: 'variable',
						visible: {min: 1,max: 3} 
					  },
					  swipe: {onMouse: true, onTouch: true},
					  pagination:jQuery(this).parents(".dt-sc-team-carousel-wrapper.type2").find(".pager"),
					  prev:prev,
					  next:next
				});
	
			});
		}
		
		// Patner Carousel
		if( jQuery('.dt-sc-partner-carousel').length ) {
			jQuery('.dt-sc-partner-carousel').each(function(){
				jQuery(this).carouFredSel({
					responsive:true,
					auto:true,
					width:'100%',
					height: 'variable',
					prev: 'prev',
					next: 'next',
					scroll:1,
					swipe: {onMouse: true, onTouch: true},
					items:{visible: {min: 1, max: 4}, height: 'variable'}
				});
			});
		}
		
		// Sliding Banner
		if(jQuery('.slider-wrapper').length) {
			jQuery('.slider-wrapper').each(function(){
				var $this = jQuery(this).find('.main-slider');
				$this.carouFredSel({
					responsive: true,
					auto: false,
					width: '100%',
					height: 'auto',
					scroll: {
						fx: "crossfade",
						duration: 800
					},
					swipe: {onMouse: true, onTouch: true},
					items: { width: $this.find("div.column").width(),  visible: { min: 1, max: 1 } },
					pagination: {
						container: jQuery(this).find('.slide-controls'),
						anchorBuilder: false
					}
				});
			});		
		}	
		
		// Twitter Carousel
		if(jQuery('#tweets_container').length) {
			jQuery('#tweets_container .tweet_list').carouFredSel({
				width: 'auto',
				height: 'auto',
				scroll: {
					duration: 1000
				},
				direction: 'up',
				swipe: {onMouse: true, onTouch: true},
				items: {
					height: 'auto',
					visible: {
						min: 1,
						max: 1
					}
				}
			});
		}

		// Content Carousel
		if(jQuery('.dt-sc-content-carousel-wrapper').length) {
			jQuery('.dt-sc-content-carousel-wrapper').each(function() {
			
				var pagger = jQuery(this).next(),
				next = pagger.find("a.next"),
				prev = pagger.find("a.prev");
				
				jQuery(this).carouFredSel({
					responsive: true,
					auto: false,
					width: '100%',
					height: 'variable',
					prev: prev,
					next: next,
					swipe: {onMouse: true, onTouch: true},
					scroll: 1,
					items: { 
					height: 'variable',
					visible: { min: 1, max: 1 }
					}
				});
				
			});
		} 

		// Product Carousel
		if(jQuery('.feature-product-carousel').length) {
			jQuery('.feature-product-carousel').each(function() {
			
				var pagger = jQuery(this).parents(".product-carousel-wrapper").find("div.product-carousel"),
				next = pagger.find("a.next"),
				prev = pagger.find("a.prev"),
				column = jQuery(this).parents(".product-carousel-wrapper").attr('data-column');
				
				if(column == '') column = 4;
				
				if(column == 1) {
					jQuery(this).carouFredSel({ 
						responsive: true, auto: false, width: '100%', height: 'variable', prev: prev, next: next, scroll: 1, swipe: {onMouse: true, onTouch: true}, 
						items: { width: jQuery(this).find('.column').width(), height: 'variable', visible: { min: 1, max: 1 } } 
					});
				} else if(column == 2) {
					jQuery(this).carouFredSel({ 
						responsive: true, auto: false, width: '100%', height: 'variable', prev: prev, next: next, scroll: 1, swipe: {onMouse: true, onTouch: true}, 
						items: { width: jQuery(this).find('.column').width(), height: 'variable', visible: { min: 1, max: 2 } } 
					});
				} else if(column == 3) {
					jQuery(this).carouFredSel({ 
						responsive: true, auto: false, width: '100%', height: 'variable', prev: prev, next: next, scroll: 1, swipe: {onMouse: true, onTouch: true}, 
						items: { width: jQuery(this).find('.column').width(), height: 'variable', visible: { min: 1, max: 3 } } 
					});
				} else if(column == 4) {
					jQuery(this).carouFredSel({ 
						responsive: true, auto: false, width: '100%', height: 'variable', prev: prev, next: next, scroll: 1, swipe: {onMouse: true, onTouch: true}, 
						items: { width: jQuery(this).find('.column').width(), height: 'variable', visible: { min: 1, max: 4 } } 
					});
				}
			
			});
		}

		// Events Carousel
		if(jQuery('.events-carousel').length) {
			jQuery('.events-carousel').each(function() {
			
				var pagger = jQuery(this).parents(".events-carousel-wrapper").find("div.product-carousel"),
				next = pagger.find("a.event-next"),
				prev = pagger.find("a.event-prev"),
				column = jQuery(this).parents(".events-carousel-wrapper").attr('data-column');
				
				if(column == '') column = 4;
				
				if(column == 2) {
					jQuery(this).carouFredSel({
						responsive: true, auto: false, width: '100%', height: 'variable', prev: prev, next: next, scroll: 1, swipe: {onMouse: true, onTouch: true}, 
						items: { width: jQuery(this).find('.column').width(), height: 'variable', visible: { min: 1, max: 2 } }
					});
				} else if(column == 3) {
					jQuery(this).carouFredSel({
						responsive: true, auto: false, width: '100%', height: 'variable', prev: prev, next: next, scroll: 1, swipe: {onMouse: true, onTouch: true}, 
						items: { width: jQuery(this).find('.column').width(), height: 'variable', visible: { min: 1, max: 3 } }
					});
				} else if(column == 4) {
					jQuery(this).carouFredSel({
						responsive: true, auto: false, width: '100%', height: 'variable', prev: prev, next: next, scroll: 1, swipe: {onMouse: true, onTouch: true}, 
						items: { width: jQuery(this).find('.column').width(), height: 'variable', visible: { min: 1, max: 4 } }
					});
				}

			});
		}

	});
	
	/* Progress Bar & Custom Animation */
	 animateSkillBars();
	 animateSection();
	 $(window).on('scroll', function(){ 
		animateSkillBars();
		animateSection();
	 });

	 function animateSection(){
		 var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
		 jQuery('.animate'+applyViewPort).each(function(){
			var $this = jQuery(this),
				$animation = ( $this.data("animation") !== undefined ) ? $this.data("animation") : "slideUp";
			var	$delay = ( $this.data("delay") !== undefined ) ? $this.data("delay") : 300;
			
			if( !$this.hasClass($animation) && !$this.hasClass('hold-animations') && $this.parents('.hold-animations').length < 1 ){
				setTimeout(function() { $this.addClass($animation);	},$delay);
			}
		 });
	 }
	 
	if (jQuery('.animate').parents('.play-animations').length) {
		jQuery('.animate').on("click", function () {
			var $this = jQuery(this),
				$animation = ( $this.data("animation") !== undefined ) ? $this.data("animation") : "slideUp";
			$this.removeClass($animation);
			setTimeout(function () { $this.addClass($animation); }, 50);
			return false;
		});
	}
	 
	 function animateSkillBars(){
		 var applyViewPort = ( jQuery("html").hasClass('csstransforms') ) ? ":in-viewport" : "";
		 jQuery('.dt-sc-progress'+applyViewPort).each(function(){
			 var progressBar = jQuery(this),
				 progressValue = progressBar.find('.dt-sc-bar').attr('data-value');
				 
				 if (!progressBar.hasClass('animated')) {
						progressBar.addClass('animated');
						progressBar.find('.dt-sc-bar').animate({width: progressValue + "%"},600,function(){ progressBar.find('.dt-sc-bar-text').fadeIn(400); });
				 }
		 });
	}
	
	//BMI Calculation...
	$('form[name="frmbmi"]').on('submit', function(e){
		
		var fet = $('input[name="txtfeet"]').val();
		var inc = $('input[name="txtinches"]').val();
		var height = ( parseInt(fet, 10) * 12 ) + parseInt(inc, 10);
		var weight = $('input[name="txtlbs"]').val();
		
		var bmi = ( parseFloat(weight) / (height * height) ) * 703;
		$('input[name="txtbmi"]').val(parseFloat(bmi).toFixed(1));
		
		e.preventDefault();
		
	});
	
	//BMI Classification View...
	if($(".fancyInline").length)
	$(".fancyInline").prettyPhoto({default_width: 300,animation_speed:'normal',autoplay_slideshow: false,social_tools: false,deeplinking:false});
	
	//ANIMATE NUMBER...
	$('.dt-sc-num-count').each(function(){
	  $(this).one('inview', function (event, visible) {
		  if(visible === true) {
			  var val = $(this).attr('data-value');
			  $(this).animateNumber({ number: val	}, 2000);
		  }
	  });
	});
	
	$( "#datepicker" ).datepicker({ dateFormat : 'dd/mm/yy', });
	$( "#datepicker-enddate" ).datepicker({ dateFormat : 'dd/mm/yy', });
	
	//Divider Scroll to top
	$("a.scrollTop").each(function(){
		$(this).on('click', function(e){
			$("html, body").animate({ scrollTop: 0 }, 600);
			e.preventDefault();
		});
	});
	
	//Image flip
	$(".imageflip").each(function(){
		$(this).flip({
			axis: "y", // y or x
			reverse: true, // true and false
			trigger: "hover", // click or hover
			speed: 600
		});	
	});	
	
	//Video Popup
	if($(".popupVideo").length)
	$(".popupVideo").prettyPhoto({default_width: 640,animation_speed:'normal',autoplay_slideshow: false,social_tools: false,deeplinking:false});
	
});