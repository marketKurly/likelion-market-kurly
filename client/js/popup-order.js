import {
  insertLast,
  getNode,
  attr,
  clearContents
} from "../lib/index.js";

const orderBtn = getNode('.cart__order__button');
//const orderBtn = document.querySelectorAll('.cart__order__button');
// 주문 완료 
const handlerOrderBtn = () =>{
  location.href = "../pages/popup-order.html";
  //alert('주문 완료되었습니다. 내일 새벽에 만나요.')
}
orderBtn.addEventListener('click', handlerOrderBtn);




//let target = orderBtn // 클릭할 버튼요소를 변수 처리
//let targetID;

//주문 완료 팝업 열기
// target.addEventListener('click', function(){
//   targetID = this.getAttribute('href');
//   document.querySelector(targetID).style.display = 'block';
//  });

// function openPop() {
//   //document.getElementById("popup_layer").style.display = "block";
//   location.href = "../pages/popup-order.html";
// }

//팝업 닫기
// function closePop() {
//   document.getElementById("popup_layer").style.display = "none";
// }