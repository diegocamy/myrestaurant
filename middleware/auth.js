const { verifyToken } = require("../auth/jwt");

const auth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      throw new Error();
    }

    const verified = verifyToken(token);

    req.user = verified._id;
    next();
  } catch (error) {
    error.status = 401;
    error.message = "Unauthorized";
    next(error);
  }
};

module.exports = {
  auth,
};
