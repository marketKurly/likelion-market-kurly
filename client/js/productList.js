// 슬라이드 기능

$(document).ready(function () {
  $('.accordion--set__head>button').click(function () {
    var submenu = $(this).next('ul');

    if (submenu.is(':visible')) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });
});

// 체크 초기화
const resetButton = document.querySelector('.check-reset');
const checkbutton = document.querySelectorAll('.check2');

let a = () => {
  checkbutton.forEach((item) => {
    item.checked = false;
  });
};

resetButton.addEventListener('click', a);

// 페이지네이션

$(function () {
  let container = $('#pagination');
  container.pagination({
    dataSource: [
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
    ],
    pageSize: 5,
    callback: function (data, pagination) {
      var dataHtml;

      $.each(data, function (index, item) {
        dataHtml + item.name;
      });

      $('#data-container').html(dataHtml);
    },
  });
});

// 상품 주소 받아오기

fetch('http://localhost:3000/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));
