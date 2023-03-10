const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

// "/login "  /는 반드시 넣어야 함
router.get("/login", ctrl.login);

//router 내보내기 
module.exports = router;
