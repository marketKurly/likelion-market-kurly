// main banner swiper1
let mainBannerSwiper = new Swiper('.swiper1', {
  loop: true, // 무한 반복
  // autoplay 3초마다 넘기기
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper1 .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper1 .swiper-button-next',
    prevEl: '.swiper1 .swiper-button-prev',
  },
});

// mousehover stop start 설정
$('.swiper1 .swiper-slide').on('mouseenter', function () {
  mainBannerSwiper.autoplay.stop();
  $('.swiper1 .swiper-button-next').addClass(
    'buttonhidden'
  );
  $('.swiper1 .swiper-button-prev').addClass(
    'buttonhidden'
  );
});
$('.swiper1 .swiper-slide').on('mouseleave', function () {
  mainBannerSwiper.autoplay.start();
  $('.swiper1 .swiper-button-next').removeClass(
    'buttonhidden'
  );
  $('.swiper1 .swiper-button-prev').removeClass(
    'buttonhidden'
  );
});

// today-recomend-product swiper2
let todayRecomendProductSwiper = new Swiper('.swiper2', {
  slidesPerView: '4', // 한 슬라이드에 보여줄 갯수
  spaceBetween: 10, // 슬라이드 사이 여백
  slidesPerGroup: 4, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  pagination: {
    el: '.swiper2 .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper2 .swiper-button-next',
    prevEl: '.swiper2 .swiper-button-prev',
  },
});
