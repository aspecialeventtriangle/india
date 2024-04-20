jQuery.noConflict();
jQuery(document).ready(function($){
	
	"use strict";
	
	var isMobile = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Blackberry/i)) || (navigator.userAgent.match(/Windows Phone/i)) ? true : false;
	var currentWidth = window.innerWidth || document.documentElement.clientWidth;
	var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;
	var $wooIsotope = mytheme_urls.wooIsotope;
	var $submenuAnimation = mytheme_urls.submenuAnimation;
	
	//Call Sub Menu Hover Animation
	if(!isMobile && currentWidth > 767){
		menuHover();
	}
	
	//Sub Menu Hover Animation
	function menuHover() {
		
		if($submenuAnimation != '') {
			
			if($submenuAnimation == 'animation1') {
				
				$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(function(){
					if($(this).find(".megamenu-child-container").length) 
						$(this).find(".megamenu-child-container").stop(true, true).css('display', 'none').slideToggle(200, 'linear');
					else 
						$(this).find("> ul.sub-menu").stop(true, true).css('display', 'none').slideToggle(200, 'linear');
				},function(){
					if($(this).find(".megamenu-child-container").length) 
						$(this).find(".megamenu-child-container").stop(true, true).css('display', 'block').hide();
					else 
						$(this).find('> ul.sub-menu').stop(true, true).css('display', 'block').hide();
				});
				
			} else if($submenuAnimation == 'animation2') {
				
				$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(function(){
					if($(this).find(".megamenu-child-container").length)
						$(this).find(".megamenu-child-container").stop(true, true).css('display', 'none').fadeIn();
					else
						$(this).find("> ul.sub-menu").stop(true, true).css('display', 'none').fadeIn();
				},function(){
					if($(this).find(".megamenu-child-container").length)
						$(this).find(".megamenu-child-container").stop(true, true).css('display', 'block').fadeOut();
					else
						$(this).find('> ul.sub-menu').stop(true, true).css('display', 'block').fadeOut(); 
				});
				
			} else if($submenuAnimation == 'animation3') {	
		
				$("li.menu-item-depth-0,li.menu-item-simple-parent ul li" ).hover(function(){
					if($(this).find(".megamenu-child-container").length) 
						$(this).find(".megamenu-child-container").stop(true, true).css('display', 'none').delay(20).animate({ "height": "show", "opacity": "show" }, 500 );
					else 
						$(this).find("> ul.sub-menu").stop(true, true).css('display', 'none').delay(20).animate({ "height": "show", "opacity": "show" }, 500 );
				},function(){
					if($(this).find(".megamenu-child-container").length) 
						$(this).find(".megamenu-child-container").stop(true, true).css('display', 'block').hide();
					else 
						$(this).find('> ul.sub-menu').stop(true, true).css('display', 'block').hide();
				});
		
			}
			
		}
	
	}
	
	// Prevents Page Jumping On Click
	$('a[href="#"]').click(function(e) {
		e.preventDefault();
	});
	
	// Preloader
	var $preloader = mytheme_urls.preloader;
	if($preloader == 'enable') {
		Pace.on("done", function(){
			$(".loader-wrapper").fadeOut(500);
			$(".pace").remove();
		});
	}
	
	// Nice Scroll
	var $nicescroll = mytheme_urls.nicescroll;
	if( $nicescroll === "enable" && !isMacLike ) {
		$("html").niceScroll({zindex:99999,cursorborder:"1px solid #424242"});
	}
	
	// Style Picker Content Scroll
	var $stylepicker = mytheme_urls.stylepicker;
	if($stylepicker == 'enable') {
		$(".picker-scroll").niceScroll({cursorwidth:5,zindex:999999,cursorcolor :"#424242"});
	}
	
	/* Mega Menu */
	megaMenu();
	function megaMenu() {
		var screenWidth = $(document).width(),
		containerWidth = $(".header .container").width(),
		containerMinuScreen = (screenWidth - containerWidth)/2;
		if( containerWidth == screenWidth ){

			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){

				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();

				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > screenWidth ){
					var SwMinuOffset = screenWidth - ParentLeftPosition;
					var marginFromLeft = MegaMenuChildContainerWidth - SwMinuOffset;
					var marginFromLeftActual = (marginFromLeft) + 25;
					var marginLeftFromScreen = "-"+marginFromLeftActual+"px";
					$(this).css('left',marginLeftFromScreen);
				}

			});
		} else {

			$("li.menu-item-megamenu-parent .megamenu-child-container").each(function(){
				var ParentLeftPosition = $(this).parent("li.menu-item-megamenu-parent").offset().left,
				MegaMenuChildContainerWidth = $(this).width();

				if( (ParentLeftPosition + MegaMenuChildContainerWidth) > containerWidth ){
					var marginFromLeft = ( ParentLeftPosition + MegaMenuChildContainerWidth ) - screenWidth;
					var marginLeftFromContainer = containerMinuScreen + marginFromLeft + 20;

					if( MegaMenuChildContainerWidth > containerWidth ){
						var MegaMinuContainer	= ( (MegaMenuChildContainerWidth - containerWidth)/2 ) + 10;
						var marginLeftFromContainerVal = marginLeftFromContainer - MegaMinuContainer;
						marginLeftFromContainerVal = "-"+marginLeftFromContainerVal+"px";
						$(this).css('left',marginLeftFromContainerVal);
					} else {
						marginLeftFromContainer = "-"+marginLeftFromContainer+"px";
						$(this).css('left',marginLeftFromContainer);
					}
				}

			});
		}
	}
	
	//Menu Navigation
	var $isOnePage = mytheme_urls.isOnePage;
	if($isOnePage == 'true') {
		
		$('.header-mean-wrapper #main-menu').onePageNav({
			currentClass : 'current_page_item',
			filter		 : ':not(.external)',
			scrollSpeed  : 750,
			scrollOffset : 78
		});	
		
		$('.header-mean-wrapper #main-menu').meanmenu({
			meanMenuContainer :  $('#menu-container'),
			meanRevealPosition:  'right',
			meanScreenWidth   :  767
		});
		
	} else {
	
		$("#dt-menu-toggle").on('click', function( event ){
			event.preventDefault();
			var $menu;
			$menu = $("nav#main-menu").find("ul.menu:first");
			$menu.slideToggle(function(){
				$menu.css('overflow' , 'visible');
				$menu.toggleClass('menu-toggle-open');
			});
		});
		
		$(".dt-menu-expand").on('click', function(event){
			if( $(this).hasClass("dt-mean-clicked") ){
				$(this).text("+");
				if( $(this).prev('ul').length ) {
					$(this).prev('ul').slideUp(400);
				} else {
					$(this).prev('.megamenu-child-container').find('ul:first').slideUp(600);
				}
			} else {
				$(this).text("-");
				if($(this).hasClass('expand-all-submenus')) {
					$(this).prev('.megamenu-child-container').find('ul').slideDown(1400);
				} else {
					if( $(this).prev('ul').length ) {
						$(this).prev('ul').slideDown(400);
					} else{
						$(this).prev('.megamenu-child-container').find('ul:first').slideDown(2000);
					}
				}
			}
			
			$(this).toggleClass("dt-mean-clicked");
			return false;
		});
	
	}
	
	// Sticky Header
	if( mytheme_urls.isOnePage == 'true' ) {
		if(mytheme_urls.onepagestickynav == 'enable') $("#header-wrapper").sticky({ topSpacing: 0 });
	} else if(mytheme_urls.stickynav == 'enable' && !isMobile && currentWidth > 767) {
		$("#header-wrapper").sticky({ topSpacing: 0 });
	}
	
	if((mytheme_urls.isOnePage == 'true' && mytheme_urls.onepagestickynav == 'enable') || (mytheme_urls.stickynav == 'enable' && !isMobile && currentWidth > 767)) {
		var headerH = parseInt($('#header-animate').height(), 10) + parseInt($('#header-wrapper-sticky-wrapper').position().top, 10);
		$(document).bind('ready scroll', function() {
			var docScroll = $(document).scrollTop();
			if(docScroll >= headerH) {
				if (!$('#header-animate').hasClass('header-animate')) {
					$('#header-animate').addClass('header-animate').css({ top: '-155px' }).stop().animate({ top: 0 }, 500);
				}
			} else {
				$('#header-animate').removeClass('header-animate').removeAttr('style');
			}
		});
	}
	
	/* Parallax Section */
	$('.parallax').each(function(){
		$(this).bind('inview', function (event, visible) {
			if(visible == true) {
				$(this).parallax("50%", 0.3);
			} else {
				$(this).css('background-position','');
			}
		});
	});
	
	//NEWSLETTER AJAX SUBMIT...
	$('form[name="frmNewsletter"]').on('submit', function () {
		
		var $this = $(this); 
		var $mc_email = $this.find('#dt_mc_emailid').val(),
			$mc_apikey = $this.find('#dt_mc_apikey').val(),
			$mc_listid = $this.find('#dt_mc_listid').val();

		$.ajax({
			type: "POST",
			url: mytheme_urls.ajaxurl,
			data:
			{
				action: 'priority_mailchimp_subscribe',
				mc_email: $mc_email,
				mc_apikey: $mc_apikey,
				mc_listid: $mc_listid
			},
			success: function (response) {
				$this.parent().find('#ajax_newsletter_msg').html(response);
				$this.parent().find('#ajax_newsletter_msg').slideDown('slow');
				if (response.match('success') != null) $this.slideUp('slow');
			}
		});
		
		return false;
		
    });
	
	// Script For Search Enable / Disable
	if($(".show-box").length) {
		$(".show-box").on('click', function() {
			$(this).parent().find('.search-form-box').slideDown();
			if($(this).parents().hasClass('header6')) $(this).parents('#menu-container').find('#main-menu').slideUp();
		});
	}
	
	if($(".dt-searchform-close").length) {
		$(".dt-searchform-close").on('click', function() {
			$(this).parent().slideUp();
			$(this).parents('#menu-container').find('#main-menu').slideDown();
		});
	}
	
	$(document).on('click', function(ev){
		
		if(!$('header').hasClass('header6')) {
			var myID = ev.target.id, myClass = ev.target.className;
			if(myClass !='fa fa-search' && myClass !='search-text-box' && myClass !='show-box' && myID !='search-box'){
				$( '.search-form-box' ).slideUp();
			}
		}
		
	});
	
	// For Blog Videos
	$("div.dt-video-wrap").fitVids();
	$('.wp-video').css('width', '100%');
	$('.wp-video-shortcode').css('width', '100%');
	$('.wp-video-shortcode').css('height', '100%');
	
	$('.blog-load-more').css({"cursor":"pointer"});
	$('.portfolio-load-more').css({"cursor":"pointer"});
	
	$('.blog-load-more').on('click', function(){
		
		if(!$(this).hasClass('disable_click')) {
			var pageid = $(this).attr('data-pageid'),
				page = $(this).attr('data-page'),
				more_text = $(this).html();

			$.ajax({
				type: "POST",
				url : mytheme_urls.ajaxurl,
				data:
				{
					action: "priority_ajax_load_blog_posts",
					pageid: pageid,
					page: page
				},
				beforeSend: function(){
					$('.blog-load-more').html('Loading...');
				},
				error: function (xhr, status, error) {
					$('.blog-load-more').html('No More Posts to Show!');
				},
				success: function (response) {
					if(response == 'NoData') {
						$('.blog-load-more').html('No More Posts to Show!');
						$('.blog-load-more').addClass('disable_click');
						$('.blog-load-more').css({"cursor":"default"});
					} else {
						$('.apply-isotope').append(response);
						page = parseInt(page, 10)+1;
						$('.blog-load-more').attr('data-page', page)
						$('.apply-isotope').isotope( 'reloadItems' ).isotope();
						$('.wp-video').css('width', '100%');
						$('.wp-video').css('height', '100%');
						$("div.dt-video-wrap").fitVids();
						$(window).trigger( 'resize' );
						$('.blog-load-more').html(more_text);
						if( $(".recent-gallery").find("li").length > 1 ) {
							$(".recent-gallery").bxSlider({ auto:false, useCSS:false, pagerCustom: '#bx-pager', autoHover:true, adaptiveHeight:true });
						}
					}
				},
			});
			//Isotope relayout...
			setTimeout(function() {
				$('.apply-isotope').isotope('reLayout');
			}, 3000);
		}
	});
	
	$('.portfolio-load-more').on('click', function(){
		
		if(!$(this).hasClass('disable_click')) {
			var postid = $(this).attr('data-postid'),
				postperpage = $(this).attr('data-post-per-page'),
				page = $(this).attr('data-page'),
				pagelayout = $(this).attr('data-page-layout'),
				tax = $(this).attr('data-taxonomy'),
				more_text = $(this).html();
				
			$.ajax({
				type: "POST",
				url : mytheme_urls.ajaxurl,
				data:
				{
					action: "priority_ajax_load_portfolio_posts",
					postid: postid,
					postperpage: postperpage,
					page: page,
					pagelayout: pagelayout,
					tax: tax,
				},
				beforeSend: function(){
					$('.portfolio-load-more').html('Loading...');
				},
				error: function (xhr, status, error) {
					$('.portfolio-load-more').html('No More Posts to Load!');
				},
				success: function (response) {
					if(response == 'NoData') {
						$('.portfolio-load-more').html('No More Posts to Load!');
						$('.portfolio-load-more').addClass('disable_click');
						$('.portfolio-load-more').css({"cursor":"default"});
					} else {
						$('.portfolio-container').append(response);
						page = parseInt(page, 10)+1;
						$('.portfolio-load-more').attr('data-page', page)
						$('.portfolio-container').isotope( 'reloadItems' ).isotope();
						$(window).trigger( 'resize' );	
						$('.portfolio-load-more').html(more_text);
						if($(".portfolio").length) {
							$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({hook:'data-gal', animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false,social_tools: false,deeplinking:false});		
						}
					}
				},
			});
			//Isotope relayout...
			setTimeout(function() {
				$('.portfolio-container').isotope('reLayout');
			}, 3000);
			
		}
		
	});
	
	// Gallery Slider
	$(".recent-gallery").each( function () {
		if($(this).attr('id') != undefined) var $pager_id = '';
		else $pager_id = '#bx-pager';
		$(this).bxSlider({ auto:false, useCSS:false, pagerCustom: $pager_id, autoHover:true, adaptiveHeight:true, nextText:'', prevText:'' });
	});

	/// PrettyPhoto For Portfolio
	if($(".portfolio").length) {
		$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({hook:'data-gal', animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: false,social_tools: false,deeplinking:false});		
	}
	
	//Smart Resize Start
	$(window).smartresize(function(){
		
		// Shop Page Isotope
		if($wooIsotope == 'true') {
			if( $(".woocommerce-isotope").length ){
				if($('#primary').hasClass('page-with-sidebar')) var $gwidth = 18; else var $gwidth = 22;
				$(".woocommerce-isotope").each(function(){
					$(this).isotope({itemSelector : '.product-wrapper',transformsEnabled:false,masonry: { gutterWidth: $gwidth} });
				});
			}
		}
		
		// Blog Template Isotope
		if( $(".apply-isotope").length ){
			$(".apply-isotope").each(function(){
				$(this).isotope({itemSelector : '.column',transformsEnabled:false,masonry: { gutterWidth: 25} });
			});
		}
		
		// Mega Menu
		megaMenu();
		
		//Call Sub Menu Hover Animation
		if(!isMobile && currentWidth > 767){
			menuHover();
		}
		
	});
	
	//Window Load Start
	$(window).on('load', function(){
		
		// Shop Page Isotope
		if($wooIsotope == 'true') {
			if( $(".woocommerce-isotope").length ){
				if($('#primary').hasClass('page-with-sidebar')) var $gwidth = 18; else var $gwidth = 22;
				$(".woocommerce-isotope").each(function(){
					$(this).isotope({itemSelector : '.product-wrapper',transformsEnabled:false,masonry: { gutterWidth: $gwidth} });
				});
			}
		}
		
		// Blog Template Isotope
		if( $(".apply-isotope").length ){
			$(".apply-isotope").each(function(){
				$(this).isotope({itemSelector : '.column',transformsEnabled:false,masonry: { gutterWidth: 25} });
			});
		}
		
		// Portfolio Template isotope
		var $container = $('.apply-isotope-portfolio');
		if( $container.length) {
			
			var $width = $container.hasClass("no-space") ? 0 : 20;
	
			$(window).smartresize(function(){
				$container.css({overflow:'hidden'}).isotope({itemSelector : '.column',masonry: { gutterWidth: $width } });
			});
			
			$container.isotope({
			  filter: '*',
			  masonry: { gutterWidth: $width },
			  animationOptions: { duration: 750, easing: 'linear', queue: false  }
			});
		}
				
		if($("div.sorting-container").length){
			$("div.sorting-container a").click(function(){
				var $width = $container.hasClass("no-space") ? 0 : 20;				
				$("div.sorting-container a").removeClass("active-sort");
				var selector = $(this).attr('data-filter');
				$(this).addClass("active-sort");
				$container.isotope({
					filter: selector,
					masonry: { gutterWidth: $width },
					animationOptions: { duration:750, easing: 'linear',  queue: false }
				});
			return false;	
			});
		}
		
		// Portfolio Carousel
		if(jQuery('.portfolio-carousel').length) {
			jQuery('.portfolio-carousel').carouFredSel({
				responsive: true,
				auto: false,
				width: '100%',
				height: 'variable',
				prev: '.portfolio-prev',
				next: '.portfolio-next',
				scroll: 1,
				swipe: {onMouse: true, onTouch: true},
				items: { 
				width: $(this).find('.column.no-space').width(),
				height: 'variable',
				visible: {
				  min: 1,
				  max: 3 }
				}
			});
		}
		
		// Mega Menu
		megaMenu();
		
	});
	
	// Goto Top
	$().UItoTop({ easingType: 'easeOutQuart' });
	
	// Shop Single Page Add To Cart
	$('.plus').on('click', function(e){
		e.preventDefault();
		var currentVal = parseInt($(this).parents('.quantity').find('.input-text').val(), 10);
		if (!isNaN(currentVal)) {
			$(this).parents('.quantity').find('.input-text').val(currentVal + 1);
		} else {
			$(this).parents('.quantity').find('.input-text').val(0);
		}
	});

	$(".minus").on('click', function(e) {
		e.preventDefault();
		var currentVal = parseInt($(this).parents('.quantity').find('.input-text').val(), 10);
		if (!isNaN(currentVal) && currentVal > 0) {
			$(this).parents('.quantity').find('.input-text').val(currentVal - 1);
		} else {
			$(this).parents('.quantity').find('.input-text').val(0);
		}
	});
	
	// Adding extra Div around select input type
	$("select").each(function(){
		if($(this).css('display') != 'none') {
			$(this).wrap( '<div class="selection-box"></div>' );
		}
	});
	
});

//MeanMenu Custom Scroll
function funtoScroll(x, e) {
	"use strict";
	var str = new String(e.target);
	var pos = str.indexOf('#');
	var t = str.substr(pos);
	
	var eleclass = jQuery(e.target).prop("class");
	
	if(eleclass == "external") {
		window.location.href = e.target;	
	} else {
		jQuery.scrollTo(t, 750, { offset: { top: 50 }});
	}
	
	jQuery(x).parent('.mean-bar').next('.mean-push').remove();		
	jQuery(x).parent('.mean-bar').remove();

	jQuery('.header-mean-wrapper #main-menu').meanmenu({
		meanMenuContainer :  jQuery('#menu-container'),
		meanRevealPosition:  'right',
		meanScreenWidth   :  767
	});
	
	e.preventDefault();
}(jQuery);