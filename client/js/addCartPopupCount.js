import { getNode, getInputValue } from '../lib/index.js';

const minusCount = getNode(
  '.add-cart__list__info__amount__count__minus'
);
const plusCount = getNode(
  '.add-cart__list__info__amount__count__plus'
);
const result = getNode(
  '.add-cart__list__info__amount__count__result'
);

// console.log(resultvalue);
const count = (type) => {
  // 현재 화면에 표시된 값
  let resultvalue = result.innerText;
  // resultvalue = parseInt(resultvalue) + 1;
  //더하기/빼기
  if (type === 'plus') {
    console.log('plus');
    resultvalue = parseInt(resultvalue) + 1;
  } else if (type === 'minus') {
    console.log('minus');
    resultvalue = parseInt(resultvalue) - 1;
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
