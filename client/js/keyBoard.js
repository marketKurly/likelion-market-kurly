// 첫번째 슬라이더 focus
// $('.swiper1 .swiper-button-next').focus(function () {
//   console.log('focus in');
// });

import { getNode, getNodes } from '../lib/index.js';

// 두번째 슬라이더 focus
// $('.swiper2').focus(function () {
//   console.log('focus in2');
// });

// // 세번째 슬라이더 focus
// $('.swiper3').focus(function () {
//   console.log('focus in3');
// });

const node = getNodes(
  '.swiper-product__image-container__shopping-cart'
);

const addCart = getNode('.add-cart-background');
function moveFocus(next) {
  console.log('afxvsrh');
  if (event.keyCode == 13) {
    //엔터누를경우
    console.log('adasdaf');
    getNode(next).focus(); //아규먼트id 노드로 이동해서 focus한다
  }
}
// node.forEach((item) => {
//   // item.onkeydown(function () {
//   //   item.moveFocus(getNode('.add-cart-background'));
//   // });
//   // if (window.event.keyCode == 13) {
//   //   item.moveFocus(addCart);
//   moveFocus(item);
// });

// $(
//   'slide0 .swiper-product__image-container__shopping-cart'
// ).focus(function () {
//   console.log('aaaaaaaaa');
// });

node.forEach((item) => {
  item.addEventlistener('click', () => {
    console.log('aasasd');
  });
});
