"use strict";

const output = {
    //function과 비슷하다고 보면 된다.
    home: (req, res) => { 
        res.render("home/index");
    },   //오브젝트가 아니라서 , 오브젝느는 ;
    login: (req, res) => {
        res.render("home/login"); 
    },
};
//const 오브젝트로 본다
const process = {
    login: (req, res) => {
        console.log(req.body);
    },
};

// exports 불러올수 있도록 지정해줘야 함
module.exports = {
    output,
    process,
};