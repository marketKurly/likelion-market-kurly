import {
  getNode,
  css,
  visibleElement,
  invisibleElement,
} from '../lib/index.js';

//addCartPopupCount

const minusCount = getNode(
  '.add-cart__list__info__amount__count__minus'
);
const plusCount = getNode(
  '.add-cart__list__info__amount__count__plus'
);
const result = getNode(
  '.add-cart__list__info__amount__count__result'
);

let resultvalue = result.innerText;
// console.log(resultvalue);
const count = (type) => {
  // 현재 화면에 표시된 값

  // resultvalue = parseInt(resultvalue) + 1;
  //더하기/빼기
  if (type === 'plus') {
    resultvalue = parseInt(resultvalue) + 1;
  } else if (type === 'minus') {
    if (resultvalue > 0) {
      resultvalue = parseInt(resultvalue) - 1;
    }
  }

  // 결과 출력
  result.innerText = resultvalue;
};

minusCount.addEventListener('click', () => {
  count('minus');
});
plusCount.addEventListener('click', () => {
  count('plus');
});

//addcart 팝업

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
  console.log('000');
  resultvalue = 0;
  result.innerText = resultvalue;
  e.preventDefault();
};

shoppingCart.addEventListener('click', onClickshoppingCart);
addCartCancleButton.addEventListener(
  'click',
  onClickaddCartCancleButton
);
