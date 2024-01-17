const knex = require("../database/conection");
const bcrypt = require("bcrypt");

async function registerAccountService({ name, email, password, res }) {
  try {
    const searchExistingEmail = await knex("customerdataaccount").where({
      email,
    });

    if (!searchExistingEmail.length == 0) {
      return res.json({ messagem: "Email já cadastrado!" });
    }

    const passEncrypt = bcrypt.hashSync(password, 10);
    const createNewAccount = await knex("customerdataaccount")
      .insert({
        name: name,
        email: email,
        password: passEncrypt,
      })
      .returning(["name", "email"]);

    console.log(createNewAccount);
    return true;
  } catch (error) {
    return res.status(500).json({ messagem: error });
  }
}

module.exports = { registerAccountService };
