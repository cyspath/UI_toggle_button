
$(document).ready(function() {

  $('.toggle').click(function() {
    if ($(this).hasClass('on')) {
      $(this).find('.toggle-circle').animate({
        left: "+=20px"
      }, 200)
      $(this).toggleClass('on')
    } else {
      $(this).find('.toggle-circle').animate({
        left: "-=20px"
      }, 200)
      $(this).toggleClass('on')
    }

  })

})
