import $ from 'jquery'

$(() => {
  $('.button').on('click', () => {
    $('.box2').toggleClass('action')
  })

  var count = 1

  $('.box3').on('transitionend', e => {
    if (e.originalEvent.propertyName === 'width') {
      $('.count').text(count++)
    }
  })
})
