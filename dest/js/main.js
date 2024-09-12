
$(function () {
  $(window).on('load', function () {
    $(".loader").delay(6000).fadeOut('slow');
    $("#container").delay(5500).fadeOut('slow');
  });
  $(window).on('reload', function () {
    $(".loader").delay(6000).fadeOut('slow');
    $("#container").delay(5500).fadeOut('slow');
  });
});
//スクロール時のイベントを追加
window.addEventListener('scroll', function(){
  //すべての.itemを取得
  const item = document.getElementById('footerTape');
  const footer = this.document.getElementById('footer');
  let fH = footer.offsetHeight;
  let windowH = window.innerHeight;
  let minus = windowH + fH + 900;

    //.itemのオフセットの高さを取得
    let targetTop = item.offsetTop;
  

    if(window.scrollY - minus > targetTop){
      item.classList.add('show');

    }else{
      item.classList.remove('show');
    }
});


