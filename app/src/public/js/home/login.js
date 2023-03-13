"use strict";

//  DOM 문서 객체 모델 , 인터페이스 Html에서 존재하는 내용을 javascript로 가져와서 제어 할수 있음 
// 선택자란 ejs에 html의 지정된 내역을 가져옴 
// const   id = document.querySelector("선택자");
// id의 내용을 가져올떄는 #을 붙여준다
const   id = document.querySelector("#id"),
        pass = document.querySelector("#psword"),
        loginbtn = document.querySelector("button"); //버튼 태그는 1개뿐이라서 그냥 이름으로 가져옴

// login 클릭 이벤트가 뜨면 login이라는 함수 호출
loginbtn.addEventListener("click", login);

function login () {
    //request이므로 변수로 받아옴... id.vaule일경우 id에 입력된 값을 가져온다
    const req = {
        id : id.value,
        psword : psword.value;
    } 

}
