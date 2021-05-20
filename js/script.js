
/************************************************************
アコーディオン
************************************************************/
$(function () {
    // タイトルをクリックすると開閉
    $(".accordion__title").on("click", function () {
        $(this).next().slideToggle();
    });
    // ボタンにアクティブクラスを付与
    $('.accordion__btn').click(function () {
        $(this).toggleClass('accordion__btn--active');
    });
});



/************************************************************
スムーススクロール
************************************************************/

$(function(){
    $("a[href^='#']").click(function() {
    // #で始まるアンカーをクリックした場合に処理
  
        
       var speed = 500; // ミリ秒
       // スクロールスピード
  
       var href= $(this).attr("href");
       // アンカーの値を取得
  
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先取得
  
       var position = target.offset().top + -100;　/*上に-100ずらしている*/
       // 移動先を数値で取得
  
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       // スムーススクロール実行
  
       return false;
    });
  });
