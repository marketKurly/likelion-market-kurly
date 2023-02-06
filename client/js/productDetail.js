import { getNode, attr } from '../lib/index.js';

const body = getNode('.body');
const main = getNode('.product-detail');
const hidden = getNode('#hidden');

/* 메인 클릭 핸들러 */
const handler = (e) => {
  let target = e.target;

  while (!attr(target, 'data-name')) {
    // 부모 찾는 반복문
    target = target.parentNode;

    if (target.nodeName === 'BODY') {
      // 부모 찾다가 부모가 BODY가 될 때 끝내라
      target = null;
      return;
    }
  }

  if (target.id === 'send2') {
    hidden.style.display = 'block';
    // body.classList.add('scrollLock');

    /* $('body').on(
      'scroll touchmove mousewheel',
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    ); */
  }

  /* if (target.dataname.name === 'cancel') {
    hidden.style.display = 'none';
  } */
};

main.addEventListener('click', handler);
