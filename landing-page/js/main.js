"use strict";
jQuery(document).ready(function ($) {
$(window).scroll(function () {

        if ($(".navbar-default").add(".navbar-inverse").offset().top > 50) {
            $(".reveal-menu-home").addClass("top-nav-collapse");
            $(".reveal-menu-blog").addClass("top-nav-collapse-blog");
            $(".nav-container").css("border", "none");
        } else {
            $(".reveal-menu-home").removeClass("top-nav-collapse");
            $(".reveal-menu-blog").removeClass("top-nav-collapse-blog");
            $(".nav-container").css("border-bottom", "1px solid #6d6e6f");
        }
    });


    $(".carousel").carousel({
        interval: 6000,
    });

    $("#navigation").onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: "",
        easing: "swing",
        begin: function () {
        },
        end: function () {
        },
        scrollChange: function ($currentListItem) {
        }
    });

    try {
        $(".fun-facts_wrapper").appear(function () {
            $(".timer").countTo();
        });
    } catch (err) {

        console.log(err.message);
    }

    $("#fun-facts").parallax("50%", 0.4);
    $("#services").parallax("50%", 0.4);

    var myTheme = window.myTheme || {},
    $win = $(window);

    myTheme.Isotope = function () {

        var isotopeContainer = $(".isotopeContainer");
        if (!isotopeContainer.length || !jQuery().isotope) return;
        $win.load(function () {
            isotopeContainer.isotope({
                itemSelector: ".isotopeSelector"
            });
            $(".isotope-filter_links").on("click", "a", function (e) {
                $(".isotope-filter_links ul li").find(".active").removeClass("active");
                $(this).addClass("active");
                var filterValue = $(this).attr("data-filter");
                isotopeContainer.isotope({ filter: filterValue });
                e.preventDefault();
            });
        });

    };

    myTheme.Isotope();

    myTheme.Fancybox = function () {

        $(".fancybox-pop").fancybox({
            maxWidth: 900,
            maxHeight: 700,
            fitToView: true,
            width: "80%",
            height: "80%",
            autoSize: false,
            closeClick: false,
            openEffect: "elastic",
            closeEffect: "none"
        });

        $(".various").fancybox({
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: "70%",
            height: "70%",
            autoSize: false,
            closeClick: false,
            openEffect: "elastic",
            closeEffect: "none"
        });

    };

    myTheme.Fancybox();
	
    $(".grid-masonry").masonry({
        // options...
        itemSelector: ".grid-item",
        columnWidth: ".grid-item",

    });
	
    if (Modernizr.touch) {
        $(".close-overlay").removeClass("hidden");

        $(".img").on("click", function (e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        $(".close-overlay").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {

        $(".img").on("mouseenter", function () {
            $(this).addClass("hover");
        }).on("mouseleave", function () {
            $(this).removeClass("hover");
        });
    }

});