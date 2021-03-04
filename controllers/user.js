const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("../helpers/jwt");

module.exports = {
  signup: async (req, res, next) => {
    try {
      const { email, password, repeated_password } = req.body;

      const foundUser = await User.findOne({ email: email });

      if (foundUser) {
        return res.status(400).send("El correo ya está registrado");
      }

      if (password !== repeated_password) {
        return res.status(400).send("Las contraseñas no coinciden");
      }

      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        email: email,
        password: hashedPassword,
      });

      await newUser.save();

      const token = jwt.signToken(newUser);

      res.send(token);
    } catch (error) {
      res.send(error);
    }
  },
};
