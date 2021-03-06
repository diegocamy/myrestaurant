const jwt = require("jsonwebtoken");

const signToken = (user) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

const verifyToken = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
  signToken,
  verifyToken,
};
