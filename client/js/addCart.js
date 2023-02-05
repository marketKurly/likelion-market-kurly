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

const onClickshoppingCart = () => {
  // console.log('asd');
  // console.log(css(addCartPopup, 'display'));
  visibleElement(addCartPopup);
};
const onClickaddCartCancleButton = () => {
  invisibleElement(addCartPopup);
};

shoppingCart.addEventListener('click', onClickshoppingCart);
addCartCancleButton.addEventListener(
  'click',
  onClickaddCartCancleButton
);
