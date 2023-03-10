import {
  getNode,
  addClass,
  removeClass,
  toggleClass,
  insertAfter,
  insertLast,
  tiger,
} from '../lib/index.js';

const useState = (val) => {
  let state = val;
  function read() {
    return state;
  }
  function write(newVal) {
    state = newVal;
  }
  return [read, write];
};
/* -------------------------------------------------------------------------- */
/*                                  elements                                  */
/* -------------------------------------------------------------------------- */
const registerFormIdInput = getNode(
  '.register__form__id__input'
);
const registerFormIdWarning = getNode(
  '.register__form__id__warning'
);
const registerFormId = getNode('.register__form__id');
/* -------------------------------------------------------------------------- */
const registerFormPwInput = getNode(
  '.register__form__pw__input'
);
const registerFormPwWarning = getNode(
  '.register__form__pw__warning'
);
const registerFormPw = getNode('.register__form__pw');
/* -------------------------------------------------------------------------- */
const registerFormRepwInput = getNode(
  '.register__form__re-pw__input'
);
const registerFormRepwWarning = getNode(
  '.register__form__re-pw__warning'
);
const registerFormRepw = getNode('.register__form__re-pw');
/* -------------------------------------------------------------------------- */
const registerFormNameInput = getNode(
  '.register__form__name__input'
);
const registerFormNameWarning = getNode(
  '.register__form__name__warning'
);
const registerFormName = getNode('.register__form__name');
/* -------------------------------------------------------------------------- */
const registerFormEmailInput = getNode(
  '.register__form__email__input'
);
const registerFormEmailWarning = getNode(
  '.register__form__email__warning'
);
const registerFormEmail = getNode('.register__form__email');
/* -------------------------------------------------------------------------- */
const registerFormPhoneInput = getNode(
  '.register__form__phone__input'
);
const registerFormPhoneWarning = getNode(
  '.register__form__phone__warning'
);
const registerFormPhone = getNode('.register__form__phone');
/* -------------------------------------------------------------------------- */
const registerFormBirthdayInput = getNode(
  '.register__form__birthday__input'
);
const registerFormBirthdayWarning = getNode(
  '.register__form__birthday__warning'
);
const registerFormBirthday = getNode(
  '.register__form__birthday'
);
/* -------------------------------------------------------------------------- */
const checkDuplicatedIdButton = getNode(
  '.register__form__id__button'
);
const checkDuplicatedEmailButton = getNode(
  '.register__form__email__button'
);
/* -------------------------------------------------------------------------- */
const registerButton = getNode('.register__button');
// const registerFormPwInput = getNode();
// const registerFormPwWarning = getNode();
// const registerFormRepwInput = getNode();
// const registerFormEmailInput = getNode();
// const registerFormPhoneInput = getNode();
// const registerFormBirthdayInput = getNode();
/* -------------------------------------------------------------------------- */

const [userInfo, setUserInfo] = useState({
  accesToken: '',
  id: '',
  pw: '',
  name: '',
  email: '',
  phone: '',
  address: '',
  gender: '',
  birthday: '',
});

const [idType, setIdType] = useState(0);
const [pwType, setPwType] = useState(0);
const [repwType, setRepwType] = useState(0);
const [nameType, setNameType] = useState(0);
const [emailType, setEmailType] = useState(0);
const [phoneType, setPhoneType] = useState(0);
const [birthdayType, setBirthdayType] = useState(0);
const [gender, setGender] = useState('male');
const [accessToken, setAccessToken] = useState('');
const [clearId, setClearId] = useState(false);
const [clearPw, setClearPw] = useState(false);
const [clearRepw, setClearRepw] = useState(false);
const [clearName, setClearName] = useState(false);
const [clearEmail, setClearEmail] = useState(false);
const [clearPhone, setClearPhone] = useState(false);
/* ---------------------------- validation - ????????? ---------------------------- */
registerFormIdInput?.addEventListener(
  'input',
  handlingIdInput
);
registerFormPwInput?.addEventListener(
  'input',
  handlingPwInput
);
registerFormRepwInput?.addEventListener(
  'input',
  handlingRepwInput
);
registerFormNameInput?.addEventListener(
  'input',
  handlingNameInput
);
registerFormEmailInput?.addEventListener(
  'input',
  handlingEmailInput
);
registerFormPhoneInput?.addEventListener(
  'input',
  handlingPhoneInput
);
registerFormBirthdayInput?.addEventListener(
  'input',
  handlingBirthdayInput
);
checkDuplicatedIdButton?.addEventListener(
  'click',
  handlingCheckDuplicateId
);
checkDuplicatedEmailButton?.addEventListener(
  'click',
  handlingCheckDuplicateEmail
);
registerButton?.addEventListener('click', handlingSubmit);
function handlingIdInput(e) {
  setClearId(false);
  if (idType() == 3) {
    setIdType(0);
    registerFormIdInput.value = '';
  }
  if (
    (idType() === 0 || idType() === 2) &&
    !validationId(e.target.value)
  ) {
    setIdType(1);
    getNode(
      '.register__form__id__warning--is-valid'
    )?.remove();
    getNode(
      '.register__form__id__warning--is-perfect'
    )?.remove();
    insertLast(
      '.register__form__id',
      `
        <div class="register__form__id__warning--is-active">
          5~20?????? ?????? ?????????, ????????? ???????????? -, _ ???
            ?????? ???????????????.
        </div>
      `
    );
    removeClass(
      registerFormId,
      'register__form__id__warning'
    );
    removeClass(
      registerFormIdWarning,
      'register__form__id__warning--is-valid'
    );
    addClass(
      registerFormIdWarning,
      'register__form__id__warning--is-active'
    );
  }
  if (idType() === 1 && validationId(e.target.value)) {
    setIdType(2);
    getNode(
      '.register__form__id__warning--is-active'
    )?.remove();
    insertLast(
      '.register__form__id',
      `
        <div class="register__form__id__warning--is-valid">
          ??????????????? ????????? ??????????????????.
        </div>
      `
    );
    removeClass(
      registerFormIdWarning,
      'register__form__id__warning--is-active'
    );
    addClass(
      registerFormIdWarning,
      'register__form__id__warning--is-valid'
    );
  }
}
/* ---------------------------- validation - ???????????? --------------------------- */
function handlingPwInput(e) {
  registerFormRepwInput.value = '';
  // getNode('.register__form__re-pw__warning')?.remove();
  // getNode(
  //   '.register__form__re-pw__warning--is-active'
  // )?.remove();
  // getNode(
  //   '.register__form__re-pw__warning--is-valid'
  // )?.remove();
  if (
    (pwType() === 0 || pwType() === 2) &&
    !validationPassword(e.target.value)
  ) {
    setPwType(1);
    getNode(
      '.register__form__pw__warning--is-valid'
    )?.remove();
    insertLast(
      '.register__form__pw',
      `
        <div class="register__form__pw__warning--is-active">
         8~16??? ?????? ??? ?????????, ??????, ??????????????? ???????????????.
        </div>
      `
    );
    removeClass(
      registerFormPw,
      'register__form__pw__warning'
    );
    addClass(
      registerFormPwWarning,
      'register__form__pw__warning--is-active'
    );
    setClearPw(false);
  }
  if (
    pwType() === 1 &&
    validationPassword(e.target.value)
  ) {
    setPwType(2);
    getNode(
      '.register__form__pw__warning--is-active'
    )?.remove();
    removeClass(
      registerFormPwWarning,
      'register__form__pw__warning--is-active'
    );
    setClearPw(true);
  }
}
/* -------------------------------------------------------------------------- */
/*                          validation - ???????????? ??????                           */
/* -------------------------------------------------------------------------- */
function handlingRepwInput(e) {
  if (
    (repwType() === 0 || repwType() === 2) &&
    !validationRepassword(e.target.value)
  ) {
    setRepwType(1);
    getNode(
      '.register__form__re-pw__warning--is-valid'
    )?.remove();
    insertLast(
      '.register__form__re-pw',
      `
        <div class="register__form__re-pw__warning--is-active">
         ??????????????? ???????????? ????????????.
        </div>
      `
    );
    removeClass(
      registerFormRepw,
      'register__form__re-pw__warning'
    );
    removeClass(
      registerFormRepwWarning,
      'register__form__re-pw__warning--is-valid'
    );
    addClass(
      registerFormRepwWarning,
      'register__form__re-pw__warning--is-active'
    );
    setClearRepw(false);
  }
  if (
    repwType() === 1 &&
    validationRepassword(e.target.value)
  ) {
    setRepwType(2);
    getNode(
      '.register__form__re-pw__warning--is-active'
    )?.remove();
    insertLast(
      '.register__form__re-pw',
      `
        <div class="register__form__re-pw__warning--is-valid">
          ??????????????? ???????????????!
        </div>
      `
    );
    removeClass(
      registerFormIdWarning,
      'register__form__id__warning--is-active'
    );
    addClass(
      registerFormIdWarning,
      'register__form__id__warning--is-valid'
    );
    setClearRepw(true);
  }
}
/* -------------------------------------------------------------------------- */
/*                               validation - ??????                             */
/* -------------------------------------------------------------------------- */
function handlingNameInput(e) {
  if (
    (nameType() === 0 || nameType() === 2) &&
    !validationName(e.target.value)
  ) {
    setNameType(1);
    getNode(
      '.register__form__name__warning--is-valid'
    )?.remove();
    insertLast(
      '.register__form__name',
      `
        <div class="register__form__name__warning--is-active">
          ????????? ?????? ??? ???????????? ???????????????. (????????????, ?????? ?????? ??????)
        </div>
      `
    );
    removeClass(
      registerFormName,
      'register__form__name__warning'
    );
    addClass(
      registerFormNameWarning,
      'register__form__name__warning--is-active'
    );
    setClearName(false);
  }
  if (nameType() === 1 && validationName(e.target.value)) {
    setNameType(2);
    getNode(
      '.register__form__name__warning--is-active'
    )?.remove();
    removeClass(
      registerFormNameWarning,
      'register__form__name__warning--is-active'
    );
    setClearName(true);
  }
}
/* ---------------------------- validation - ????????? ---------------------------- */
function handlingEmailInput(e) {
  setClearEmail(false);
  if (emailType() == 3) {
    setEmailType(0);
    registerFormEmailInput.value = '';
  }
  if (
    (emailType() === 0 || emailType() === 2) &&
    !validationEmail(e.target.value)
  ) {
    setEmailType(1);
    getNode(
      '.register__form__email__warning--is-valid'
    )?.remove();
    getNode(
      '.register__form__email__warning--is-perfect'
    )?.remove();
    insertLast(
      '.register__form__email',
      `
        <div class="register__form__email__warning--is-active">
         ????????? ????????? ?????? ??????????????????.
        </div>
      `
    );
    removeClass(
      registerFormEmail,
      'register__form__email__warning'
    );
    removeClass(
      registerFormEmailWarning,
      'register__form__email__warning--is-valid'
    );
    addClass(
      registerFormEmailWarning,
      'register__form__email__warning--is-active'
    );
  }
  if (
    emailType() === 1 &&
    validationEmail(e.target.value)
  ) {
    setEmailType(2);
    getNode(
      '.register__form__email__warning--is-active'
    )?.remove();
    insertLast(
      '.register__form__email',
      `
        <div class="register__form__email__warning--is-valid">
          ??????????????? ????????? ??????????????????.
        </div>
      `
    );
    removeClass(
      registerFormEmailWarning,
      'register__form__email__warning--is-active'
    );
    addClass(
      registerFormEmailWarning,
      'register__form__email__warning--is-valid'
    );
  }
}
/* ---------------------------- validation - ???????????? --------------------------- */
function handlingPhoneInput(e) {
  if (
    (phoneType() === 0 || phoneType() === 2) &&
    !validationPhone(e.target.value)
  ) {
    setPhoneType(1);
    getNode(
      '.register__form__phone__warning--is-valid'
    )?.remove();
    insertLast(
      '.register__form__phone',
      `
        <div class="register__form__phone__warning--is-active">
         ??????????????? ?????? ??????????????????.
        </div>
      `
    );
    removeClass(
      registerFormPhone,
      'register__form__phone__warning'
    );
    addClass(
      registerFormPhoneWarning,
      'register__form__phone__warning--is-active'
    );
    setClearPhone(false);
  }
  if (
    phoneType() === 1 &&
    validationPhone(e.target.value)
  ) {
    setPhoneType(2);
    getNode(
      '.register__form__phone__warning--is-active'
    )?.remove();
    removeClass(
      registerFormPhoneWarning,
      'register__form__phone__warning--is-active'
    );
    setClearPhone(true);
  }
}
/* ---------------------------- validation - ???????????? --------------------------- */
function handlingBirthdayInput(e) {
  console.log(e.target.value);
  if (
    (birthdayType() === 0 || birthdayType() === 2) &&
    !validationBirthday(e.target.value)
  ) {
    setBirthdayType(1);
    getNode(
      '.register__form__birthday__warning--is-valid'
    )?.remove();
    insertLast(
      '.register__form__birthday',
      `
        <div class="register__form__birthday__warning--is-active">
         ??????????????? ?????? ??????????????????.
        </div>
      `
    );
    removeClass(
      registerFormBirthday,
      'register__form__birthday__warning'
    );
    addClass(
      registerFormBirthdayWarning,
      'register__form__birthday__warning--is-active'
    );
  }
  if (
    birthdayType() === 1 &&
    validationBirthday(e.target.value)
  ) {
    setBirthdayType(2);
    getNode(
      '.register__form__birthday__warning--is-active'
    )?.remove();
    removeClass(
      registerFormBirthdayWarning,
      'register__form__birthday__warning--is-active'
    );
  }
}

/* -------------------------------------------------------------------------- */
/*                                    regax                                   */
/* -------------------------------------------------------------------------- */
// ????????? (5~20?????? ?????? ?????????, ????????? ???????????? -, _ ??? ?????? ???????????????.)
// ^[a-z0-9-,_]{5,20}$
// ???????????? (8~16??? ?????? ??? ?????????, ??????, ??????????????? ???????????????.)
// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$
// [\da-zA-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,}
// ???????????? (??????????????? ?????? ??????????????????.)
// ^0\d{7,10}$
// ???????????? (??????????????? ?????? ??????????????????.)
// ^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$
// ????????? (????????? ????????? ?????? ??????????????????.)
// ^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
/* -------------------------------------------------------------------------- */
function validationId(id) {
  const regax = /^[a-z0-9-,_]{5,20}$/;
  return regax.test(id);
}

function validationPassword(password) {
  const regax =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  return regax.test(password);
}

function validationRepassword(rePassword) {
  return rePassword === registerFormPwInput.value;
}

function validationName(name) {
  const regax = /^[a-zA-Z???-???]{3,40}$/;
  return regax.test(name);
}

function validationEmail(email) {
  const regax =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regax.test(String(email).toLowerCase());
}

function validationPhone(phone) {
  const regax = /^0\d{7,10}$/;
  return regax.test(phone);
}

function validationBirthday(birthday) {
  const regax =
    /^(19[0-9][0-9]|20\d{2})\/(0[0-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return regax.test(birthday);
}

async function handlingCheckDuplicateId() {
  if (idType() !== 2) return;
  let ret = false;
  const result = await tiger.get(
    'http://localhost:3000/users'
  );
  result?.data?.some((item) => {
    if (item?.id === registerFormIdInput?.value) {
      ret = true;
      return;
    }
  });
  if (ret) {
    alert('?????? ?????????????????? ????????? ??????????????????.');
    setClearId(false);
  } else {
    setIdType(3);
    setClearId(true);
    getNode(
      '.register__form__id__warning--is-valid'
    )?.remove();
    insertLast(
      '.register__form__id',
      `
        <div class="register__form__id__warning--is-perfect">
         ?????? ???????????????!
        </div>
      `
    );
  }
}

async function handlingCheckDuplicateEmail() {
  if (emailType() !== 2) return;
  let ret = false;
  const result = await tiger.get(
    'http://localhost:3000/users'
  );
  result?.data?.some((item) => {
    if (item?.email === registerFormEmailInput?.value) {
      ret = true;
      return;
    }
  });
  if (ret) {
    alert('?????? ???????????? ??????????????????.');
    setClearEmail(false);
  } else {
    setEmailType(3);
    getNode(
      '.register__form__email__warning--is-valid'
    )?.remove();
    insertLast(
      '.register__form__email',
      `
        <div class="register__form__email__warning--is-perfect">
          ??????????????? ??????????????????!
        </div>
      `
    );
    setClearEmail(true);
  }
}

async function handlingSubmit() {
  if (
    !clearId() ||
    !clearPw() ||
    !clearRepw() ||
    !clearName() ||
    !clearEmail() ||
    !clearPhone()
  )
    return;
  await handlingCheckDuplicateAccessToken().then((result) =>
    setAccessToken(result)
  );
  setUserInfo({
    accessToken: accessToken(),
    username: registerFormIdInput.value,
    pw: registerFormPwInput.value,
    name: registerFormNameInput.value,
    email: registerFormEmailInput.value,
    phone: registerFormPhoneInput.value,
    address: '',
    gender: gender(),
    birthday: registerFormBirthdayInput.value,
  });
  const result = await tiger.post(
    'http://localhost:3000/users',
    userInfo()
  );
  console.log(userInfo());
  alert('???????????????! ??????????????? ??????????????? ???????????????!');
  window.location.href = './login.html';
}

const radioFieldset = getNode('.register__form__gender');
radioFieldset?.addEventListener('click', handlingGender);

function handlingGender(e) {
  e.stopPropagation();
  if (!e.target.className.includes('label')) return;
  if (e.target.className.includes('woman'))
    setGender('female');
  else if (e.target.className.includes('man'))
    setGender('male');
  else if (e.target.className.includes('none'))
    setGender('none');
}

function getPseudoAccessToken() {
  let ret = '';
  let alphabetNum =
    Number('z'.charCodeAt(0)) -
    Number('a'.charCodeAt(0)) +
    1;
  for (let i = 0; i < 10; ++i) {
    const randValue = Math.floor(
      Math.random() * (alphabetNum * 2 + 10)
    );
    if (randValue >= 52) {
      ret += randValue - 52;
    } else if (randValue >= 26) {
      ret += String.fromCharCode(
        Number('A'.charCodeAt(0)) + randValue - 26
      );
    } else {
      ret += String.fromCharCode(
        Number('a'.charCodeAt(0)) + randValue
      );
    }
  }
  return ret;
}

async function handlingCheckDuplicateAccessToken() {
  let isDuplicated = false;
  let randomValue = getPseudoAccessToken();
  const result = await tiger.get(
    'http://localhost:3000/users'
  );
  result?.data?.some((item) => {
    if (item?.accessToken === randomValue) {
      isDuplicated = true;
      return;
    }
  });
  if (!isDuplicated) {
    return randomValue;
  }
  return handlingCheckDuplicateAccessToken();
}
