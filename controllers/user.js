const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("../helpers/jwt");
const yup = require("yup");

const userSchema = yup.object({
  email: yup
    .string()
    .email("Ingrese un email válido")
    .required("Debe ingresar un email"),
  password: yup
    .string()
    .min(5, "Debe contener al menos 5 caracteres")
    .required("Debe ingresar una contraseña"),
});

module.exports = {
  signup: async (req, res, next) => {
    try {
      const { email, password, repeat_password } = req.body;

      await userSchema.validate({ email, password });

      const foundUser = await User.findOne({ email: email });

      if (foundUser) {
        throw new Error("El correo ya está registrado");
      }

      if (password !== repeat_password) {
        throw new Error("Las contraseñas no coinciden");
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
      next(error);
    }
  },
};
