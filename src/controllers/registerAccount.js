const { registerAccountService } = require("../services/registerAccount");

const registerAccount = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ mensagem: "Os campos são obrigatórios!" });
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(email)) {
    return res.send({ mensagem: "email inválido" });
  }

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passRegex.test(password)) {
    return res.send({
      mensagem:
        "A senha precisa atender aos requisitos obrigatórios como: possuir tamanho maior que 6, " +
        "devem ser incluidos pelo menos uma letra maiúscula, um número e um caractere especial",
    });
  }

  try {
    const addAccount = await registerAccountService({
      name,
      email,
      password,
      res,
    });

    if (addAccount) {
      return res
        .status(201)
        .json({ mensagem: "Usuario cadastrado com sucesso!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json({ mensagem: "Erro interno do servidor" });
  }
};

module.exports = { registerAccount };
