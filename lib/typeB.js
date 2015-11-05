
$(document).ready(function() {

  $('.toggle-switch').click(function() {
    if ($(this).hasClass('on')) {
      $(this).find('.toggle-switch-circle').animate({
        left: "+=20px"
      }, 200)
      $(this).toggleClass('on')
    } else {
      $(this).find('.toggle-switch-circle').animate({
        left: "-=20px"
      }, 200)
      $(this).toggleClass('on')
    }
  })

})
