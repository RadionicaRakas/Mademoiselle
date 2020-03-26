$(document).ready(function () {

    function checkHeader() {
        let headerHeight = $('header').innerHeight();
        $('main').css('margin-top', headerHeight);
    }

    checkHeader();
    $(window).resize(function () {
        checkHeader();
    });


    if ($('.blog-slider').length > 0) {
        $('.blog-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 15,
            dots: true,

            responsive: {
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

    if ($('.blog-slider-about').length > 0) {
        $('.blog-slider-about').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 15,
            dots: false,

            responsive: {
                0: {
                    items: 1,
                    margin: 10    
                }

            }
        });
    }
    
       if ($('.profesionals-slider').length > 0) {
        $('.profesionals-slider').owlCarousel({
            loop: true,
            margin: 15,
            dots:true,
            items: 1
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


    if ($('.contact-form').length > 0) {

        //FORM VALIDATION
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true
                    },
                    message: {
                        required: true
                    }


                },
                messages: {

                    name: {
                        required: 'Name and surname* is required field.'
                    },
                    email: {
                        required: 'Email address* is required field.',
                        email: 'Please provide a valid Email address.'
                    },
                    subject: {
                        required: 'Subject* is required field.'
                    },
                    message: {
                        required: 'The Message* is required field.'
                    }



                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });
    }













});
