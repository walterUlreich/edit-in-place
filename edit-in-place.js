$(document).ready(function() {
  $('.input').hide()
  $('.area').hide()

  $('#name').on('click', function() {
    $('#name').hide()
    $('.input').show()
  })

  $('.input').on('blur', function() {
    $('.input').hide()
    $('#name').show()
    $('#name').text($('.input').val())
  })

  $('#about').on('click', function() {
    $('#about').hide()
    $('.area').show()
  })

  $('.area').on('blur', function() {
    $('.area').hide()
    $('#about').show()
    $('#about').text($('.area').val())
  })




})
