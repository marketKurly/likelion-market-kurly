import {
  insertAfter,
  insertBefore,
  insertFirst,
  insertLast,
} from '../index.js';

const createInquiryList = ({
  name = '',
  time = '',
  title = '',
  question = '',
  answer = '',
  isSecret = '',
  id = '',
} = {}) => {
  return /* html */ `
  <article data-index="${id}">
  <tr
                    class="product-detail__description__inquiry__content__text--text"
                  >
                    <td class="title">${title}</td>
                    <td class="author gray">${name}</td>
                    <td class="created-date gray">${time}</td>
                    <td class="status gray">답변대기</td>
                  </tr>
                  <tr
                    class="product-detail__description__inquiry__content__text--detailText"
                  >
                    <td>
                      <img
                        class="question-icon"
                        src="/css/img/icon/Question.svg"
                        alt="질문 아이콘"
                      />
                      <div class="question">
                        <span>
                          ${question}
                        </span>
                      </div>
                      <img
                        class="answer-icon"
                        src="/css/img/icon/Answer.svg"
                        alt=""
                      />
                      <div class="answer">
                        <span>
                        ${answer}
                        </span>
                        <p class="gray padding-t4">
                          2023. 02. 01
                        </p>
                      </div>
                    </td>
                  </tr>
  </article>
  `;
};

export const renderInquiryList = (target, data) => {
  insertLast(target, createInquiryList(data));
};
