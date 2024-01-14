const registerEmail = (req, res) => {
  try {
    res.json({ message: "Rota enviando resposta!" });
  } catch (error) {
    res.status(501).json({ message: error });
  }
};

module.exports = { registerEmail };
