$(document).ready(function(){
  
    function checkHeader() {
        let headerHeight = $('header').innerHeight();
        $('main').css('margin-top', headerHeight);
    }
    
    checkHeader();
    $(window).resize(function () {
        checkHeader();
    });
    
    
    if($('.blog-slider').length > 0){
        $('.blog-slider').owlCarousel({
            autoplay: true,
            loop:true,
            margin: 15,
            dots:true,
            
            responsive:{
                0: {
                    items: 1,
                    margin: 10
               },
                576: {
                    items: 2,
                    slideBy: 2
                },
                992: {
                    items: 3,
                    slideBy: 3
                }
                
            }
        });
    }
    
    
    
    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animation = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
            if (position < scroll + windowHeight - 100) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animation);
            }
        });
    }
    animation();
    $(window).scroll(function () {
        animation();
        animateHeader();
    });
});
