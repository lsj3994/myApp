"use strict";

const { json } = require("body-parser");


const output = {
    //function과 비슷하다고 보면 된다.
    home: (req, res) => { 
        res.render("home/index");
    },   //오브젝트가 아니라서 , 오브젝느는 ;
    login: (req, res) => {
        res.render("home/login"); 
    },
};

const users = {
    id : ["a1","a2","a3"],
    psword : ["111","222","333"],
}


//const 오브젝트로 본다
const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                })
            }
        }
//promise에 대해서 별도로 알아보기

        return res.json({
            success: false,
            msg: "로그인에 실패 하였습니다.",
        })
    },
};

// exports 불러올수 있도록 지정해줘야 함
module.exports = {
    output,
    process,
};