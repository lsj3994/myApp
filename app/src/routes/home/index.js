const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);

// "/login "  /는 반드시 넣어야 함
router.get("/login", ctrl.output.login);
//post보내준 로그인 데이터를 처리 해준다
// home.ctrl.js로 접근해서 login함수로 접근한다
router.post("/login", ctrl.process.login);

//router 내보내기 
module.exports = router;
