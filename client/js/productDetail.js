import {
  getNode,
  attr,
  tiger,
  insertLast,
} from '../lib/index.js';

const body = getNode('.body');
const main = getNode('.product-detail');
const reviwHidden = getNode('#review-hidden');
const inquiryHidden = getNode('#inquiry-hidden');
const userInquiryContainer = getNode('.user-inquiry-inner');
const userReviewContainer = getNode('.user-inquiry-inner');
const inner = getNode('#inner');

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

  if (target.id === 'send1') {
    reviwHidden.style.display = 'block';
  }

  if (target.id === 'send2') {
    inquiryHidden.style.display = 'block';
  }
};

main.addEventListener('click', handler);

const rendingInquiryList = async (data) => {
  try {
    let response = await tiger.get(
      'http://localhost:3000/inquiry'
    );
    let listData = response.data;

    // console.log(listData);

    // inner.innerHTML = '';

    // listData.forEach((data) => console.log(data));

    for (let i = 0; i < listData.length; i++) {
      // console.log(listData[i].time);
      inner.innerHTML +=
        `<tr class='product-detail__description__inquiry__content__text--text'>
        <td class="title">` +
        listData[i].title +
        `</td><td class="author gray">` +
        listData[i].name +
        `</td><td class="created-date gray">` +
        listData[i].time +
        `</td><td class="status gray">답변대기</td></tr>
        <tr class="product-detail__description__inquiry__content__text--detailText"><td>
        <div><img class="question-icon"
        src="/css/img/icon/Question.svg"
        alt="질문 아이콘"/>
        <div class="question"><span>` +
        listData[i].question +
        `</span></div></div>
        <div><img class="answer-icon"
        src="/css/img/icon/Answer.svg"
        alt="답변 아이콘"/><div class="answer"><span>안녕하세요. 칼리입니다. 믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다. 더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히 죄송합니다. </span>
        <p class="gray padding-t4">` +
        listData[i].time +
        `</p>
        </div></div>
        </td></tr>`;
    }

    // return이 필요 한 건 map, reduce 사용 | 필요 없는 건 forEach 사용
    /* listData.forEach((data) =>
      renderInquiryList(userInquiryContainer, data)
    ); */
  } catch (err) {
    // console.log(err);
    // renderEmptyList(userCardContainer);
  }
};

rendingInquiryList();
