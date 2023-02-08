import {
  getNode,
  css,
  visibleElement,
  invisibleElement,
  getNodes,
} from '../index.js';

//addCartPopupCount
export function aadCart(
  id,
  slider,
  name,
  price,
  salePrice,
  stock,
  category,
  img,
  alt,
  saleRatio
) {
  // let allPrice = 0;
  const minusCount = getNode(
    `.add-cart__list__info__amount__count__minus`
  );
  const plusCount = getNode(
    '.add-cart__list__info__amount__count__plus'
  );
  let resultValue = '';
  let result = getNode(
    '.add-cart__list__info__amount__count__result'
  );

  // console.log(resultValue);

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

    resultValue = result.innerText;

    const infoName = getNode(`.add-cart__list__info__name`);
    const infoPrice = getNode(
      `.add-cart__list__info__amount__price`
    );
    const sumPrice = getNode(
      '.add-cart__list__price__total__price'
    );
    infoName.innerText = name;
    infoPrice.innerText =
      salePrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';
    sumPrice.innerText =
      salePrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';

    const count = (type) => {
      // 현재 화면에 표시된 값

      // resultValue = parseInt(resultValue) + 1;
      //더하기/빼기
      if (type === 'plus') {
        resultValue = parseInt(resultValue) + 1;
      } else if (type === 'minus') {
        if (resultValue > 1) {
          resultValue = parseInt(resultValue) - 1;
        }
        // sumPrice.innerText = price * resultValue;
      }

      // 결과 출력
      result.innerText = resultValue;
      // console.log(resultValue);
      sumPrice.innerText =
        (salePrice * resultValue)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';
    };
    let product = {
      id: id,
      name: name,
      price: price,
      salePrice: salePrice,
      stock: stock,
      category: category,
      img: img,
      alt: alt,
      saleRatio: saleRatio,
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
      // let currentresult = result.innerText;
      // console.log(currentresult);
      product1.setItem(
        `${slider}resultValue`,
        JSON.stringify(product)
        // currentresult
      );
      let localStorageObject = localStorage.getItem(
        `${slider}resultValue`
      );
      console.log(JSON.parse(localStorageObject));
      invisibleElement(addCartPopup);
      resultValue = 1;
      result.innerText = resultValue;
    };

    putButton.addEventListener('click', onClickPutButton);
  };

  const onClickaddCartCancleButton = (e) => {
    invisibleElement(addCartPopup);
    resultValue = 1;
    result.innerText = resultValue;
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
