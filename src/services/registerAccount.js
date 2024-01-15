const knex = require("../database/conection");

async function registerAccountService({ name, email, passEncrypt, res }) {
  const password = passEncrypt;
  try {
    const searchExistingEmail = await knex("customerdataaccount").where({
      email,
    });
    if (!searchExistingEmail.length == 0) {
      return res.json({ messagem: "Email já cadastrado!" });
    }

    const addAcccountToDB = await knex("customerdataaccount").insert({
      name,
      email,
      password,
    });

    return res.status(201).json({ message: "Usuario cadastrado com sucesso!" });
  } catch (error) {
    return res.status(501).json({ message: error });
  }
}

module.exports = { registerAccountService };

// // Verificar a força da senha (mínimo de 8 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial)
