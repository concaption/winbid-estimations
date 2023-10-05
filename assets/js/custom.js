jQuery(function ($) {
	'use strict';

	//Mean Menu
	jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

	//Navbar Area
	$(window).on('scroll',function() {
        if ($(this).scrollTop()>150){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

	//Services JS
	$('.service-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<i class='bx bx-chevrons-left'></i>",
				"<i class='bx bx-chevrons-right'></i>"],
		smartSpeed:700,
		dots:false,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

	//Home Slider JS
	$('.banner-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<i class='bx bx-chevrons-left'></i>",
				"<i class='bx bx-chevrons-right'></i>"],
		smartSpeed:1000,
		dots:false,
		items:1,
		autoHeight: true
	})

	//Project JS
	$('.project-slider').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<i class='bx bx-chevrons-left'></i>",
				"<i class='bx bx-chevrons-right'></i>"],
		smartSpeed:700,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})

	//Popup Video 
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	//Service Details JS
	$('.service-details-slider').owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		navText:["<i class='bx bx-chevrons-left'></i>",
				"<i class='bx bx-chevrons-right'></i>"],
		dots:false,
		items:1,
		smartSpeed:1500
	})

	//Testimonial JS
	$('.testimonial-slider').owlCarousel({
		loop:true,
		margin:25,
		nav:false,
		dots:true,
		smartSpeed:1500,
		stagePadding:15,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		}
	})

	//Accordian JS
	$(".accordion-title").click(function(e){
		var accordionitem = $(this).attr("data-tab");
		$("#"+accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

		$(this).toggleClass("active-title");
		$("#"+accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");
	});

	//Project JS
	try {
        var mixer = mixitup('#Container', {
            controls: {
                toggleDefault: 'none'
            }
        });
    } catch (err) {}

	//Testimonial JS
	$('.project-img-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		smartSpeed:1500,
		items:1,
		autoplay:true
	})

	//Company Slider
    $('.company-slider').owlCarousel({
		loop:true,
		margin:10,
		dots:false,
		nav:false,
		autoplay:true,
		autoplayTimeout:2000,
		smartSpeed:2000,
		autoplayHoverPause:true,
		responsive:{
		  0:{
			  items:1
		  },
		  600: {
			items:2
		  },
  
		  768:{
			  items:3
		  },
  
		  1000: {
			items:5
		  }
	  }
	});

	// Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		}
		else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
  
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	//Back Top
	$(window).on('load',function(){
		$('.top-btn').fadeOut();
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('.top-btn').fadeIn();
		}
		  else {
			$('.top-btn').fadeOut();
		}
	});
  
	$('.top-btn').on('click',function(){
		$("html, body").animate({ scrollTop: 0 }, 1500);
		return false;
	});

	//Pre Loader
	$(window).on('load',function(){
		$(".loader-content").fadeOut(1000);
	}) 

	// Switch Btn
	$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");

}(jQuery));

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('xpat_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('xpat_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('xpat_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();





//////////////////////////////////////
// Added by osama Floating Button cal.com

  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", {origin:"https://cal.com"});

  Cal("floatingButton", {"calLink":"osama-ishtiaq-plegj8/contact-us","buttonText":"Contact Us"});
  Cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
 	

  // Segment Code

  
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="MYsNx8Kx9vKH6JvJxjLyuCFRLzVqA84j";;analytics.SNIPPET_VERSION="4.16.1";
  analytics.load("MYsNx8Kx9vKH6JvJxjLyuCFRLzVqA84j");
  analytics.page();
  }}();
