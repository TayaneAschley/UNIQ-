require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routerRegister = require("./routers/register");

app.use(express.json());
app.use(routerRegister);

app.listen(port, () => {
  console.log(`servidor aberto na porta ${port}`);
});

module.exports = app;
