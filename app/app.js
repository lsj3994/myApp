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
const app = express();
//라우팅
const home = require("./src/routes/home"); //홈으로 이동 . index.js가 실행 되는 원리

//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");
  
app.use("/",home); //미들웨어를 등록해주는 메소드

// app을 보내줘야 받을 수 있다
module.exports = app;
