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
            margin: 30,
            dots:false,
            
            responsive:{
                0: {
                    items: 1,
                    margin: 0
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
    
    
});
