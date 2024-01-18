const { compareSync } = require("bcrypt");
const { loginServices } = require("../services/loginServices");
const knex = require("../database/conection");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ mensagem: "Os campos são obrigatórios!" });
  }

  const searchEmailDB = await knex("customerdataaccount").where({ email });
  if (!searchEmailDB) {
    return res.status(404).send({ mensagem: "Email não encontrado!" });
  }

  try {
    const resposta = await loginServices(email, password, res);

    if (!resposta) {
      return res.status(400).send({ mensagem: "Usário e/ou senha inválidos" });
    }
    return res.status(200);
  } catch (error) {
    return res.status(500).send({ mensagem: error });
  }
};

module.exports = { login };
