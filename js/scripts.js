// Single post wrapped div for styling purpose 
$('.c-post p').wrap( "<div id='wrapped'></div>" );
$('.c-post p img').unwrap(); // 



// 
$('#pulse')
  .mouseover( function() {
    $(this).addClass('pulse');
  })
  .mouseout( function() {
    $(this).removeClass('pulse');
  })

// // gradient bg fix
// $(window).resize(function() {
//   $('body').css({
//     background:  "-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000))" 
//   });
// });