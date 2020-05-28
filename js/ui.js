$(function(){
  // 스킵메뉴
  $('.skip>a').focus(function(){
    $('.skip').addClass('active');
  });
  $('.skip>a').blur(function(){
    $('.skip').removeClass('active');
  });

  // 1066px 이상에서의 pos_fix 카카오톡 변경
  $(window).resize(function(){
    fnKakao();
  });

  fnKakao();

  function fnKakao(){
    var winWidth=$(this).width();
    if(winWidth>=1066){
      $('#kakao').text('카카오톡');
    }else{
      $('#kakao').text('카카오톡 상담');
    }
  }
})