const testController = (req, res) => {
  res.status(200).send({
    message: "welcome to our app user",
    success: true,
  });
};

module.exports = { testController };
