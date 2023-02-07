import {
  getNode,
  attr,
  enableElement,
  disableElement,
  tiger,
} from '../lib/index.js';

const hidden = getNode('#inquiry-hidden');
const contents = getNode('.inquiry');
const sendButton = getNode('#inquiry-send');
const titleTextField = getNode('#content32');
const contentTextField = getNode('#content37');
const info = getNode('#info');
const checkbox = getNode('#secret');

/* 텍스트 지우는 함수 */
function clearText(target) {
  target.value = '';
}

/* 실시간 글자 수 체크 */
$('#content37').keyup(function (e) {
  let content = $(this).val();
  $('#counter').text(content.length + ' / 5,000');

  if (content.length > 5000) {
    $(this).val(content.substring(0, 5000));
    $('#textLengthCheck').html('(5,000 / 5,000)');
  }
});

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

  if (target.id === 'info') {
    info.style.display = 'none';
    contentTextField.focus();
  }
  if (contents && target.id !== 'info') {
    // info.style.display = '';
  }

  if (target.dataset.name === 'cancel') {
    hidden.style.display = 'none';
    info.style.display = 'block';

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
    disableElement(sendButton);
  }

  contents.addEventListener('change', changeColor);
});

/* data.json으로 데이터 보내주기 */
function submitData() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  const is_checked = checkbox.checked;

  let time = year + '.' + month + '.' + date;

  tiger.post(`http://localhost:3000/inquiry/`, {
    name: '',
    time: time,
    title: titleTextField.value,
    question: contentTextField.value,
    answer: '',
    isSecret: is_checked,
  });

  hidden.style.display = 'none';
  info.style.display = 'block';

  clearText(titleTextField);
  clearText(contentTextField);
}

sendButton.addEventListener('click', submitData);
