
const loader = document.getElementById('loader');
const container = document.getElementById('container');

window.addEventListener('load', function () {
  $('html,body').animate({ scrollTop: 0 }, '1');
  
  setTimeout(function () {
    loader.classList.add('fadeOut');
  }, 6000);
  setTimeout(function () {
    container.classList.add('fadeOut');
  }, 5800);
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


