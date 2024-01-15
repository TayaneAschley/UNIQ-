const { registerAccountService } = require("../services/registerAccount");
const bcrypt = require("bcrypt");

const registerAccount = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ messagem: "Os campos são obrigatórios!" });
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(email)) {
    return res.status(400).json({ messagem: "email inválido" });
  }

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passRegex.test(password)) {
    return res.status(400).json({ messagem: "senha fraca" });
  }

  try {
    const passEncrypt = await bcrypt.hash(password, 10);
    await registerAccountService({ name, email, passEncrypt, res });
    return res.status(200).json();
  } catch (error) {
    return res.status(501).json({ messagem: "Erro interno do servidor" });
  }
};

module.exports = { registerAccount };
