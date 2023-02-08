import {
  insertLast,
  getNode,
  attr,
  clearContents
} from "../lib/index.js";

// 배송지 변경
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
changeAddressBtn.addEventListener('click', handlerChangeAddress);

// 주문 완료 
const handlerOrderBtn = () =>{
  alert('주문 완료되었습니다. 내일 새벽에 만나요.')
}
orderBtn.addEventListener('click', handlerOrderBtn);

// 결제 예정 금액 산정
let totalPrice = 0;     // 총 가격
let totalCount = 0;     // 총 갯수
let totalKind = 0;      // 총 종류
let totalDiscount = 0;      // 상품 할인 금액
let deliveryPrice = 0;      // 배송비
let finalTotalPrice = 0;      // 최종 가격(총 가격 + 배송비)	

// $(".cart_info_td").each(function(index, element){
  
//   // 총 가격
//   totalPrice += parseInt($(element).find(".individual_totalPrice_input").val());
//   // 총 갯수
//   totalCount += parseInt($(element).find(".individual_bookCount_input").val());
//   // 총 종류
//   totalKind += 1;
// });	


/* 배송비 결정 */
if(totalPrice >= 40000){
  deliveryPrice = 0;
} else if(totalPrice == 0){
  deliveryPrice = 0;
} else {
  deliveryPrice = 3000;	
}	

/* 최종 가격 */
finalTotalPrice = totalPrice + deliveryPrice;