$(document).ready(function() {
  $('#nameP').on('click', function(){
      $('#nameP').addClass('hidden')
      $('#nameInput').removeClass('hidden')
      $('#nameInput').trigger('focus')
      $('#nameInput').val($('#nameP').text())

  })

  $('#nameInput').on('blur', function(){
      $('#nameP').text($('#nameInput').val())
      $('#nameP').removeClass('hidden')
      $('#nameInput').addClass('hidden')


  })

  $('#aboutP').on('click', function(){
      $('#bioTextArea').val($('#aboutP').text())
      $('#aboutP').addClass('hidden')
      $('#aboutTextArea').removeClass('hidden')
      $('#aboutTextArea').trigger('focus')

  })

  $('#aboutTextArea').on('blur', function(){
      $('#aboutP').text($('#aboutTextArea').val())
      $('#aboutP').removeClass('hidden')
      $('#aboutTextArea').addClass('hidden')


  })

})
