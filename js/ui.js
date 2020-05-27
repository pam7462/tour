$(function(){
  $('.skip>a').focus(function(){
    $('.skip').addClass('active');
  });
  $('.skip>a').blur(function(){
    $('.skip').removeClass('active');
  });
})