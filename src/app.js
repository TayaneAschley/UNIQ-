require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
const URL = process.env.URL;
const corsOptions = { origin: URL };

const routerRegister = require("./routers/register");
const routerLogin = require("./routers/login");

app.use(express.json());
app.use(cors(corsOptions));
app.use(routerRegister);
app.use(routerLogin);

app.listen(port, () => {
  console.log(`Aberto na porta ${port}`);
});

module.exports = app;
