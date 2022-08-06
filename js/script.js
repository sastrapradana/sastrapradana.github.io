$('.page-scroll').on('click',function(e) {
    var tujuan=$(this).attr('href');
    var elemenTujuan = $(tujuan);
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top -50
    });

    e.preventDefault();
});

// ini parallax
 $(window).scroll(function() {
    var wscroll = $(this).scrollTop();

    $('.jumbotron img').css ({
        'transform' :  'translate(0px, '+ wscroll/4 +'%)'
    });

    $('.jumbotron h1').css ({
        'transform' : 'translate(0px, '+ wscroll/2 +'%)'
    });

    $('.jumbotron p').css ({
        'transform' : 'translate(0px, '+ wscroll/1.2 +'%)'
    });


});