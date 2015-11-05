$(document).ready(function() {

  $('.toggle-switch').click(function() {

    if ($(this).hasClass('on')) {
      $confirm = $(this).prev()
      $toggle = $confirm.next()
      $yes = $confirm.find('.share-created__confirmation-btn-green')
      $no = $confirm.find('.share-created__confirmation-btn-red')

      $confirm.fadeIn()
      $toggle.hide()

      $yes.click(function() {
        $confirm.hide()
        $toggle.fadeIn()

        $(this).removeClass('on')
      }.bind(this))

      $no.click(function() {
        $confirm.hide()
        $toggle.fadeIn()
      })

    } else {
      $(this).find('.toggle-switch-circle').animate({
        left: "-=20px"
      }, 200)
      $(this).toggleClass('on')
    }

  })


})
