const { Router } = require("express");
const routerLogin = Router();

const controller = require("../controllers/login");

routerLogin.post("/login", controller.login);

module.exports = routerLogin;
