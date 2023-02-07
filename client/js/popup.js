// import { getNode } from '../lib/index.js';

// 팝업창 제어
var toggleMainPopup = function () {
  /* 쿠키 제어 함수 정의 */
  var handleCookie = {
    // 쿠키 쓰기
    // 이름, 값, 만료일
    setCookie: function (name, val, exp) {
      var date = new Date();

      // 만료 시간 구하기(exp를 ms단위로 변경)
      date.setTime(
        date.getTime() + exp * 24 * 60 * 60 * 1000
      );
      // console.log(
      //   name +
      //     '=' +
      //     val +
      //     ';expires=' +
      //     date.toUTCString() +
      //     ';path=/'
      // );

      // 실제로 쿠키 작성하기
      document.cookie =
        name +
        '=' +
        val +
        ';expires=' +
        date.toUTCString() +
        ';';
    },
    // 쿠키 읽어오기(정규식 이용해서 가져오기)
    getCookie: function (name) {
      var value = document.cookie.match(
        '(^|;) ?' + name + '=([^;]*)(;|$)'
      );
      return value ? value[2] : null;
    },
  };
  // console.log(handleCookie.getCookie('today'));

  // 쿠키 읽고 화면 보이게
  if (handleCookie.getCookie('today') == 'y') {
    $('.main_popup').removeClass('on');
  } else {
    $('.main_popup').addClass('on');
  }

  // 오늘하루 보지 않기 버튼
  $('.main_popup').on(
    'click',
    '.btn_today_close',
    function () {
      handleCookie.setCookie('today', 'y', 1);
      $(this).parents('.main_popup.on').removeClass('on');
    }
  );

  // 일반 버튼
  $('.main_popup').on('click', '.btn_close', function () {
    $(this).parents('.main_popup.on').removeClass('on');
  });
};

$(function () {
  toggleMainPopup();
});
