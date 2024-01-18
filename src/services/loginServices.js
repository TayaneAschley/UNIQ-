const knex = require("../database/conection");
const bcrypt = require("bcrypt");

async function loginServices(email, password, res) {
  try {
    const returnData = await knex("customerdataaccount").where({ email });
    const senhaBD = returnData[0].password;
    const comparePass = await bcrypt.compare(password, senhaBD);

    if (!comparePass) {
      return false;
    }

    return res.status(200).send({ mensagem: "Usuário logado!" });
  } catch (error) {
    return res.status(500).send({ mensagem: error });
  }
}

module.exports = { loginServices };
