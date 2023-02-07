import {
  insertLast,
  getNode,
  attr,
  clearContents
} from "../lib/index.js";

const Address = getNode('.cart__order__delivery__address');
const changeAddressBtn = getNode('.cart__order__delivery__address-change');
const orderBtn = getNode('.cart__order__button');

const handlerChangeAddress = () =>{
  new daum.Postcode({
    oncomplete: function(data) {
      // 주소 API 팝업에서 주소를 클릭했을 때 주소 적용되는 함수

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        var addr = ''; // 주소 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
        }

        // 주소 정보를 해당 필드에 넣는다.
        clearContents(Address);
        insertLast(Address, addr);
        insertLast(Address, '&nbsp');
        insertLast(Address, data.zonecode);
    }
}).open();
}
const handlerOrderBtn = () =>{
  alert('주문 완료되었습니다.')
}

changeAddressBtn.addEventListener('click', handlerChangeAddress);
orderBtn.addEventListener('click', handlerOrderBtn);