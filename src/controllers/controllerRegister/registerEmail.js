const registerEmail = (req, res) => {
  const { clientEmail, } = req.body;

  try {
  } catch (error) {
    res.status(501).json({ message: error });
  }
};

module.exports = { registerEmail };
