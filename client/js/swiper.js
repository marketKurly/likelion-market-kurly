// main banner swiper1
let mainBannerSwiper = new Swiper('.swiper1', {
  // loop: true, // 무한 반복
  // // autoplay 3초마다 넘기기
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// // mousehover stop start 설정
// $('.swiper-slide').on('mouseover', function () {
//   mainBannerSwiper.autoplay.stop();
// });
// $('.swiper-slide').on('mouseout', function () {
//   mainBannerSwiper.autoplay.start();
// });
