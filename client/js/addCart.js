import {
  getNode,
  css,
  visibleElement,
  invisibleElement,
} from '../lib/index.js';

const addCartPopup = getNode('.add-cart-background');
const shoppingCart = getNode(
  '.swiper-product__image-container__shopping-cart'
);
const addCartCancleButton = getNode(
  '.add-cart__list__buttons__cancle'
);

// console.log(addCartPopup);

const onClickshoppingCart = (e) => {
  // console.log('asd');
  // console.log(css(addCartPopup, 'display'));
  visibleElement(addCartPopup);
  e.preventDefault();
};
const onClickaddCartCancleButton = (e) => {
  invisibleElement(addCartPopup);
  e.preventDefault();
};

shoppingCart.addEventListener('click', onClickshoppingCart);
addCartCancleButton.addEventListener(
  'click',
  onClickaddCartCancleButton
);
