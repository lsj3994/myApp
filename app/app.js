"use strict";

// // express를 쓰는 이유
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});

//     if (req.url === '/') {
//         res.end("여기는 루트입니다.");       
//     } else if (req.url === '/login') {
//         res.end("여기는 로그인입니다.");       
//     }    
// });

// app.listen(3001, function() {
//     console.log("http 서버 가동");
// })

//모듈
const express = require("express");
const bodyParser = require( "body-parser");
const app = express();
//라우팅
const home = require("./src/routes/home"); //홈으로 이동 . index.js가 실행 되는 원리

//login.ejs에서 login.js를 연결해주기 위한 미들웨어 
// __drname은 app.js가 위치해 있는 위치 반환
// ${__dirname}/src/public폴더를 static(정정폴더)로 반환
app.use(express.static(`${__dirname}/src/public`));
// bodyparser가 jsos을 파싱할수 있도록 선언해줌
app.use(bodyParser.json());
//url 을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함되면 인식되지 않는 현상 제거
app.use(bodyParser.urlencoded({ extended: true}));

//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");
  
app.use("/",home); //미들웨어를 등록해주는 메소드

// app을 보내줘야 받을 수 있다
module.exports = app;
