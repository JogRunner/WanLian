jQuery(document).ready(function () {
    //    响应式导航
    jQuery('.select').click(function (event) {
        event.preventDefault();
        jQuery('#small-nav-container').slideToggle();
    });
    jQuery(window).scroll(function () {
        var topOffset = $(window).scrollTop();
        if (topOffset > 30) {
            $('.top-nav').attr('id', 'top-nav-fixed');
            $('#header').addClass('whiteheader');
        } else {
            $('.top-nav').attr('id', 'top-nav');
            $('#header').removeClass('whiteheader');
        }
    });

    jQuery('#contact br').remove();
    jQuery('#contact-page br').remove();

    var myslide = jQuery('.banner>ul'),
        ehead_info = jQuery('.ehead-info'),
        occasion_nav_tab = jQuery('.occasion-nav-tab'),
        tab_content = jQuery('.tab-content');

    if (myslide.length > 0) {
        myslide.bxSlider({
            auto: true
        });
    }

    jQuery('.index-content-sliders').bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 2,
        pause: 7000,
        slideWidth: 460,
        slideMargin: 10,
        controls: false
    });

    ehead_info.click(function () {
        var ehead_info_active = jQuery('.ehead-info-active');
        if (ehead_info_active.length > 0) {
            ehead_info_active.removeClass('ehead-info-active');
        }
        jQuery(this).addClass('ehead-info-active');
    });

    occasion_nav_tab.click(function () {
        tab_content.hide();
        occasion_nav_tab.removeClass('tab-active');
        jQuery(this).addClass('tab-active');
        tab_content.eq(parseInt(this.id)).show();
    });

    jQuery('.open-popup-link').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

});