const { Router } = require("express");
const routerRegister = Router();

const controller = require("../controllers/registerAccount");

routerRegister.post("/register", controller.registerAccount);

module.exports = routerRegister;
