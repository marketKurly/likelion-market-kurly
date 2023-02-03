import { getNode, attr } from '../lib/dom/index.js';

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
