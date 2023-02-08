import {
  getNode,
  css,
  visibleElement,
  invisibleElement,
  getNodes,
} from '../index.js';

//addCartPopupCount
export function aadCart(
  slider,
  name,
  price,
  img,
  alt,
  saleRetio
) {
  // let allPrice = 0;
  const minusCount = getNode(
    `.add-cart__list__info__amount__count__minus`
  );
  const plusCount = getNode(
    '.add-cart__list__info__amount__count__plus'
  );
  let resultvalue = '';
  let result = getNode(
    '.add-cart__list__info__amount__count__result'
  );

  // console.log(resultvalue);

  //addcart 팝업
  const shoppingCarts = getNode(
    `.${slider} .swiper-product__image-container__shopping-cart`
  );
  const addCartPopup = getNode(`.add-cart-background`);
  const addCartCancleButton = getNode(
    `.add-cart__list__buttons__cancle`
  );

  // console.log(addCartPopup);

  //클릭 이벤트
  const onClickshoppingCart = (e) => {
    visibleElement(addCartPopup);
    e.preventDefault();
    result = getNode(
      '.add-cart__list__info__amount__count__result'
    );

    resultvalue = result.innerText;

    const infoName = getNode(`.add-cart__list__info__name`);
    const infoPrice = getNode(
      `.add-cart__list__info__amount__price`
    );
    const sumPrice = getNode(
      '.add-cart__list__price__total__price'
    );
    infoName.innerText = name;
    infoPrice.innerText =
      price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';
    sumPrice.innerText =
      price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';

    const count = (type) => {
      // 현재 화면에 표시된 값

      // resultvalue = parseInt(resultvalue) + 1;
      //더하기/빼기
      if (type === 'plus') {
        resultvalue = parseInt(resultvalue) + 1;
      } else if (type === 'minus') {
        if (resultvalue > 1) {
          resultvalue = parseInt(resultvalue) - 1;
        }
        // sumPrice.innerText = price * resultvalue;
      }

      // 결과 출력
      result.innerText = resultvalue;
      // console.log(resultvalue);
      sumPrice.innerText =
        (price * resultvalue)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';
    };
    let product = {
      name: name,
      amount: resultvalue,
      price: price,
      image: img,
      alt: alt,
      saleRetio: saleRetio,
    };

    minusCount.addEventListener('click', () => {
      count('minus');
    });
    plusCount.addEventListener('click', () => {
      count('plus');
    });

    // 장바구니에 담기 클릭시 localstorage 에 수량 값 저장

    const putButton = getNode(
      '.add-cart__list__buttons__put'
    );

    let product1 = window.localStorage;

    const onClickPutButton = () => {
      product1.setItem(
        `${slider}resultValue`,
        JSON.stringify(product)
      );
      let localStorageObject = localStorage.getItem(
        `${slider}resultValue`
      );
      console.log(JSON.parse(localStorageObject));
      invisibleElement(addCartPopup);
      resultvalue = 1;
      result.innerText = resultvalue;
    };

    putButton.addEventListener('click', onClickPutButton);
  };

  const onClickaddCartCancleButton = (e) => {
    invisibleElement(addCartPopup);
    resultvalue = 1;
    result.innerText = resultvalue;
    e.preventDefault();
  };
  // shoppingCarts.forEach((shoppingCart) => {
  //   shoppingCart.addEventListener(
  //     'click',
  //     onClickshoppingCart
  //   );
  // });

  shoppingCarts.addEventListener(
    'click',
    onClickshoppingCart
  );

  addCartCancleButton.addEventListener(
    'click',
    onClickaddCartCancleButton
  );
}
