const jwt = require("jsonwebtoken");

const signToken = (user) => {
  const token = jwt.sign({ _id: user._id }, "secret", { expiresIn: "1h" });
  return token;
};

module.exports = {
  signToken,
};
