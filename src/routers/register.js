const { Router } = require("express");
const routerRegister = Router();

const controller = require("../controllers/controllerRegister/index");

routerRegister.get("/register", controller.registerEmail);

module.exports = routerRegister;
