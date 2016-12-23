$(window).scroll(function(){
    if ($(this).scrollTop() > 135) {
        $('.tabs').addClass('fixed');
    } else {
        $('.tabs').removeClass('fixed');
    }
});

$('.tabs a').click(function(){
  $('.tabs li').removeClass('active');
  $(this).parent().addClass('active');
})


// $('h2').wrap( "<div id='wrapped'></div>" );
