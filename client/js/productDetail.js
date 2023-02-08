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
const inquiryInner = getNode('#inquiry-inner');
const reviewInner = getNode('#review-inner');
const infoprice = getNode('#infoprice');
const total = getNode('#total-result');
const totalprice = getNode('#totalprice');
const productprice = getNode('#productprice');
const plus = getNode('#plus');
const minus = getNode('#minus');
const price = getNode('#price');
const view = getNode('#view');
const banner = getNode('#banner');
const infoImg = getNode('#infoImg');

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

const redingProducts = async (data) => {
  try {
    let response = await tiger.get(
      'http://localhost:3000/products/product-rksk'
    );
    let listData = response.data;

    // console.log(listData.image.view);

    $('#title').text(listData.name);
    $('#subtitle').text(listData.description);
    insertLast(
      infoprice,
      /* html */
      `
      <span>${listData.price}</span>
      <span>원</span>
      `
    );
    $('#price').text(listData.price + '원');
    insertLast(
      view,
      /* html */
      `<img
        class="product-detail__information__img"
        src="../assets/${listData.image.view}"
        alt="${listData.image.alt}"
      />`
    );
    insertLast(
      banner,
      /* html */
      `<img
        src="../assets/${listData.image.banner}"
        alt="${listData.image.alt}"
      />`
    );
    $('#choicetitle').text(listData.name);
    $('#bannersubtitle').text(listData.description);
    $('#bannertitle').text(listData.name);
    insertLast(
      infoImg,
      /* html */
      `<img
        class="product-detail__information__img"
        src="../assets/${listData.image.view}"
        alt="${listData.image.alt}"
      />`
    );
    $('#reviewtitle').text(listData.name);

    let resultvalue = total.innerText;
    let pricevalue = listData.price;
    productprice.innerText = listData.price;

    const count = (type) => {
      if (type === 'plus') {
        resultvalue = parseInt(resultvalue) + 1;
        total.innerText = resultvalue;
        console.log(resultvalue);
      } else if (type === 'minus') {
        if (resultvalue > 1) {
          resultvalue = parseInt(resultvalue) - 1;
          total.innerText = resultvalue;
          console.log(resultvalue);
        }
      }
    };

    minus.addEventListener('click', () => {
      count('minus');
      price.innerText = pricevalue * resultvalue;
      productprice.innerHTML = price.innerText;
    });
    plus.addEventListener('click', () => {
      count('plus');
      price.innerText = pricevalue * resultvalue;
      productprice.innerHTML = price.innerText;
    });
  } catch (err) {}
};

redingProducts();

const rendingInquiryList = async (data) => {
  try {
    let response = await tiger.get(
      'http://localhost:3000/inquiry'
    );
    let listData = response.data;

    // console.log(listData);

    // listData.forEach((data) => console.log(data));

    for (let i = 0; i < listData.length; i++) {
      // console.log(listData[i].time);
      inquiryInner.innerHTML +=
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

const rendingReviewList = async (data) => {
  try {
    let response = await tiger.get(
      'http://localhost:3000/review'
    );

    let listData = response.data;

    $('#review-counter').text(
      '총 ' + listData.length + '개'
    );
    $('#review-counter2').text(
      '후기 (' + listData.length + ')'
    );

    for (let i = 0; i < listData.length; i++) {
      // console.log(listData[i].time);
      reviewInner.innerHTML += `
      <div class="product-detail__description__review__list__content__review--div">
      <div>
        <span>베스트</span>
        <span>퍼플</span>
        <span>${listData[i].name}</span>
      </div>
      <article>
        <h3 id="reviewtitle">[풀무원] 탱탱쫄면 (4개입)</h3>
        <p>
          ${listData[i].content}
        </p>
        <footer>${listData[i].time}</footer>
      </article>
    </div>`;
    }

    if (listData.length == 0) {
      reviewInner.innerHTML += `
      <div class="product-detail__description__review__list__content__review--div">
      <section class="empty">
        <article>
          <img
            src="../css/img/Icon/warning.png"
            alt="후기 없음"
          />
          <span>
            따뜻한 첫 후기를 기다리고 있어요.
          </span>
        </article>
      </section>
    </div>`;
    }
  } catch (err) {}
};

rendingReviewList();
