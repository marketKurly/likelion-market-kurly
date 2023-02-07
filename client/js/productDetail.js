import { getNode, attr } from '../lib/index.js';

const body = getNode('.body');
const main = getNode('.product-detail');
const hidden = getNode('#hidden');
const userInquiryContainer = getNode('.user-inquiry-inner');

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

const renderInquiryList = async () => {
  try {
    // await delayP(2000);

    let response = await hong.get(
      'http://localhost:3000/inquiry'
    );
    let userData = response.data;

    // return이 필요 한 건 map, reduce 사용 | 필요 없는 건 forEach 사용
    userData.forEach((data) =>
      renderInquiryList(userInquiryContainer, data)
    );
  } catch (err) {
    // renderEmptyList(userCardContainer);
  }
};

renderInquiryList();
