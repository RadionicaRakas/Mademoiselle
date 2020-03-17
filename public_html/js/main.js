$(document).ready(function(){
  
    function checkHeader() {
        let headerHeight = $('header').innerHeight();
        $('main').css('margin-top', headerHeight);
    }
    
    checkHeader();
    $(window).resize(function () {
        checkHeader();
    });
    
});
