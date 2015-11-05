
$(document).ready(function() {

  $('.toggle.on').click(function() {
    $(this).find('.toggle-circle').animate({
      left: "+=20px"
    }, 500)
    $(this).removeClass('on')
    $(this).addClass('off')
  })

  $('.toggle.off').click(function() {
    $(this).find('.toggle-circle').animate({
      top: "-=20px"
    }, 500)
    $(this).addClass('on')
    $(this).removeClass('off')
  })

})
