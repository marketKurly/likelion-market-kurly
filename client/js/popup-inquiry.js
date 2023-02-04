import {
  getNode,
  attr,
  toggleClass,
  enableElement,
  disableElement,
} from '../lib/index.js';

const title = getNode('.title');
const contents = getNode('.contents');
const counter = getNode('#counter');
const sendButton = getNode('#send');
const titleTextField = getNode('#content32');
const contentTextField = getNode('#content37');

function clearText(target) {
  target.value = '';
}

$('#content37').keyup(function (e) {
  let content = $(this).val();
  $('#counter').text(content.length + ' / 5,000');

  if (content.length > 5000) {
    $(this).val(content.substring(0, 5000));
    $('#textLengthCheck').html('(5,000 / 5,000)');
  }
});

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

  if (target.dataset.name === 'checkbox') {
    // let img = (document.getElementById('checkbox').src =
    //   '/assets/icons/Icon/checkbox_isSecret.svg');
    // let src = img.src;
    // console.log(src);
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

/* 등록 버튼 색상 바꾸기 */
$(sendButton).ready(function changeColor(e) {
  let title = $('#content32').val();
  let content = $('#content37').val();

  if (title.length >= 1 && content.length >= 1) {
    sendButton.style.background = '#5f0080';
    sendButton.style.cursor = 'pointer';
    enableElement(sendButton);
  } else {
    sendButton.style.background = '#e1e1e1';
    sendButton.style.cursor = 'default';
  }

  contents.addEventListener('change', changeColor);
});
