const loader = document.getElementById('loader');
const container = document.getElementById('container');

function fadeOutElement(element, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.classList.add('fadeOut');
      resolve();
    }, delay);
  });
}

window.addEventListener('load', function () {
  $('html,body').animate({ scrollTop: 0 }, '1');

  fadeOutElement(container, 5800)
    .then(() => fadeOutElement(loader, 200)); // 6000 - 5800 = 200
});

// ページがリロードされたときにアニメーションを再度実行
window.addEventListener('beforeunload', function () {
  loader.classList.remove('fadeOut');
  container.classList.remove('fadeOut');
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


