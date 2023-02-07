import {
  getNode,
  attr,
  xhrPromise,
  xhrData,
  tiger,
} from '../lib/index.js';

const header = getNode('.header');
const navHeaderButton = getNode('.nav__header__button');
const navCategoryWrapper = getNode(
  '.nav__category__wrapper'
);

document.documentElement.addEventListener(
  'mouseover',
  visibleCategory
);
navCategoryWrapper?.addEventListener(
  'mouseout',
  invisibleCategory
);
navHeaderButton?.addEventListener(
  'mouseout',
  invisibleCategory
);

function visibleCategory(e) {
  e.stopPropagation();
  if (
    attr(e.target, 'class') === 'nav__header__button' ||
    attr(e.target, 'class')?.includes('nav__category')
  ) {
    navCategoryWrapper.style.display = 'block';
  }
}

function invisibleCategory(e) {
  if (attr(e.target, 'class')?.includes('nav__category'))
    navCategoryWrapper.style.display = 'none';
}
// 탑 ad광고 창 닫기
let button = document.querySelector('.topbanner__close');
function handler() {
  let AD = document.querySelector('.topbanner');
  AD.style.display = 'none';
}
button?.addEventListener('click', handler);

// tiger.get('http://localhost:3000/products');
// xhrPromise
//   .get('http://localhost:3000/products')
//   .then((res) => {
//     console.log(res);
//   });

// tiger.get('http://localhost:3000/products');
// xhrPromise({
// url: 'localhost:3000/products',
// });
// xhrPromise
