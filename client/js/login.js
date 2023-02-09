import {
  getNode,
  addClass,
  removeClass,
  toggleClass,
  insertAfter,
  insertLast,
  tiger,
  saveStorage,
  loadStorage,
} from '../lib/index.js';

const loginId = getNode('#login-id');
const loginPassword = getNode('#login-pw');
const loginButton = getNode('.login__button');
const loginRegister = getNode('.login__register');
loginButton?.addEventListener('click', handlingLogin);

async function handlingLogin() {
  const result = await tiger.get(
    `http://localhost:3000/users?username=${loginId.value}`
  );
  if (result.data.length === 0) {
    alert('아이디를 확인해주세요.');
    return;
  }
  if (result.data[0].pw === loginPassword.value) {
    saveStorage('access-token', result.data[0].accessToken);
    alert('로그인 되었습니다.');
    window.location.href = '../index.html';
  } else {
    alert('비밀번호를 확인해주세요.');
  }
}

loginRegister?.addEventListener('click', handlingRegister);

function handlingRegister() {
  window.location.href = './register.html';
}

(function () {
  loadStorage('access-token').then((item) => {
    if (item) {
      window.location.href = '../index.html';
    }
  });
})();
