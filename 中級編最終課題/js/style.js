const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

   
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerView: 1.3,
    
    breakpoints: {
    
      768: {  
        // 画面幅が768px以上の場合の設定を記述
        slidesPerView: 3,     // 表示させるスライドの数を２に設定
        spaceBetween: 20 , 
        slidesPerView: 2.5,    // スライド間の間隔を20pxに設定
      },

      1024: { 
      slidesPerView: 3,
      spaceBetween: 40,
      initialSlide: 1,
      slidesPerView: 2.8,
     
    loop: true,
     },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    
    
 
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  
jQuery('.drawer-icon').on('click', function(e){
  e.preventDefault();//aタグでどっか飛ぶの無効化 セットで覚えておくといい！

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});


jQuery('.qa-box-q').on('click', function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.qa-box-icon').toggleClass('is-open');
});

//drawer.js
$(function() {
  $( '.drawer' ).drawer()
});

//スムーススクロール
jQuery('a[href^="#"]').on('click', function() {
  
  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#' ) {
     var position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});

jQuery(window).on('scroll', function() {
 if ( 100 < jQuery(this).scrollTop()) {
  jQuery('.to-top').addClass('is-show');
 }else{
  jQuery('.to-top').removeClass('is-show');
 }
  
});

jQuery('.header-nav-list li a').on('click', function() {
  jQuery('.header-nav-list li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});


'use strict'; 
 
new WOW().init();

//スクロール時ヘッダーの色が変わる
jQuery(window).on('scroll', function () {
 
  if ( 1500 < jQuery(this).scrollTop()) { 
 jQuery('.header').addClass('change-color'); }
  else {
  jQuery('.header').removeClass('change-color'); } });

  //goggle-form

 //google-form
   let $form = $( '#js-form' )
   $form.submit(function(e) { 
     $.ajax({ 
      url: $form.attr('action'), 
      data: $form.serialize(), 
      type: "POST", 
      dataType: "xml", 
      statusCode: { 
         0: function() { 
           //送信に成功したときの処理 
           $form.slideUp()
           $( '#js-success' ).slideDown()
          
         }, 
         200: function() { 
           //送信に失敗したときの処理 
           $form.slideUp()
           $( '#js-error' ).slideDown() 
         }
       } 
     })
     return false; 
   })
 
   // formの入力確認
   let $submit = $( '#js-submit' )
   $( '#js-form input' ).on( 'change', function() {
       if (
           $( '#js-form input[type="text"]' ).val() !== "" &&
           $( '#js-form input[name="entry.1900918039"]' ).prop( "checked" ) === true
       ) {
           //全て入力された時
           $submit.prop( false )
           $submit.addClass( '-active' )
           
       } else {
           //入力されていない時
             $submit.prop( true )
             $submit.removeClass( '-active' )
       }
   }); 