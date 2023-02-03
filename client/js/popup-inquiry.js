import { getNode, attr } from '../lib/index.js';

const title = getNode('.title');
const contents = getNode('.contents');
const titleTextField = getNode('#content32');
const contentTextField = getNode('#content37');

function clearText(target) {
  target.value = '';
}

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

  if (target.dataset.name === 'send') {
    console.log(titleTextField.value);
    console.log(contentTextField.value);
  }

  if (target.dataset.name === 'cancel') {
    console.log('cancle');

    clearText(titleTextField);
    clearText(contentTextField);
  }
};

contents.addEventListener('click', handler);
