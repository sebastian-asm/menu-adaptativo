$('#btnMenu').click(function () {
  $('nav').toggleClass('abrirMenu');

  if ($('#btnMenu i').text() == 'menu') {
    $('#btnMenu i').text('close');
  } else {
    $('#btnMenu i').text('menu');
  }
  
});