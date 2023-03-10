"use strict";

//function과 비슷하다고 보면 된다.
const home = (req, res) => { 
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login"); 
};

module.exports = {
    home,
    login,
};