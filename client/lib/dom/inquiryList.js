import { insertLast } from '../index.js';

const createInquiryList = ({
  id = '',
  name = '',
  time = '',
  title = '',
  question = '',
  answer = '',
  isSecret = false,
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
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0NSAtODc2KSB0cmFuc2xhdGUoNDIzIDI3NikgdHJhbnNsYXRlKDIgMzE2KSB0cmFuc2xhdGUoMjAgMjg0KSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIiBmaWxsPSIjQTg2NEQ4Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMS45NDYgNy41YzIuNDU2IDAgNC40NDYgMS45OSA0LjQ0NiA0LjQ0NiAwIC45MDctLjI3MSAxLjc1LS43MzcgMi40NTNsLjg0NS44NDMtMS4yNTggMS4yNTgtLjg0My0uODQ1Yy0uNzAzLjQ2Ni0xLjU0Ni43MzctMi40NTMuNzM3LTIuNDU1IDAtNC40NDYtMS45OS00LjQ0Ni00LjQ0NkM3LjUgOS40OTEgOS40OSA3LjUgMTEuOTQ2IDcuNXptMCAxLjc3OGMtMS40NzMgMC0yLjY2OCAxLjE5NS0yLjY2OCAyLjY2OHMxLjE5NSAyLjY2OCAyLjY2OCAyLjY2OGMuNDEyIDAgLjgwMi0uMDk0IDEuMTUtLjI2bC0uMzY5LS4zNyAxLjI1OC0xLjI1Ny4zNjkuMzY5Yy4xNjYtLjM0OC4yNi0uNzM4LjI2LTEuMTUgMC0xLjQ3My0xLjE5NS0yLjY2OC0yLjY2OC0yLjY2OHoiLz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
                        alt="질문 아이콘"
                      />
                      <div class="question">
                        <span>
                          ${question}
                        </span>
                      </div>
                      <img
                        class="answer-icon"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ0NSAtMTkxOCkgdHJhbnNsYXRlKDQyMyAyNzYpIHRyYW5zbGF0ZSgyIDE2MjIpIHRyYW5zbGF0ZSgyMCAyMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0iIzVGMDA4MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik05Ljc2IDE1LjcwOGwuNTQtMS40MDRoMy40NTZsLjU1MiAxLjQwNGgyLjE0OEwxMyA3LjVoLTEuOTMyTDcuNiAxNS43MDhoMi4xNnptMy4zMjQtMy4xMzJoLTIuMTEybDEuMDU2LTIuNzEyIDEuMDU2IDIuNzEyeiIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
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
