$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .nav, .main-content, #white-logo, #black-logo, .socials-h').toggleClass('active-burger');
        $('body').toggleClass('lock');
    });

    $('.connect').click(function(){
        {
            console.log('clicked')
            $('.popup-overlay').fadeIn();
            $('.popup-overlay').css('backgroundColor', 'rgba(0,0,0, 0.6')
        }
    });

    $('.popup__close').click(function(){
        $('.popup-overlay').fadeOut();
    });

    $(document).mouseup(function (event){
        let popup = $('.popup');
        if (event.target != popup[0] && popup.has(event.target).length === 0){
            $('.popup-overlay').fadeOut();
        }
    });

    $('#work').click(function(e){
        $('html,body').stop().animate({ scrollTop: $('.work').offset().top }, 1000);
            e.preventDefault();
    });
    $('#mission').click(function(e){
        $('html,body').stop().animate({ scrollTop: $('.mission').offset().top }, 1000);
            e.preventDefault();
    });
    $('#fashion').click(function(e){
        $('html,body').stop().animate({ scrollTop: $('.fashion').offset().top }, 1000);
            e.preventDefault();
    });
    $('#exp').click(function(e){
        $('html,body').stop().animate({ scrollTop: $('.experience').offset().top }, 1000);
            e.preventDefault();
    });
    $('#marketing').click(function(e){
        $('html,body').stop().animate({ scrollTop: $('.marketing').offset().top }, 1000);
            e.preventDefault();
    });

});