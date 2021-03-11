const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { signToken } = require("../auth/jwt");
const yup = require("yup");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client({});

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

      const token = signToken(newUser);

      res
        .cookie("jwt", token, {
          httpOnly: true,
        })
        .send();
    } catch (error) {
      next(error);
    }
  },
  loginWithEmail: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const foundUser = await User.findOne({ email });

      if (!foundUser) {
        throw new Error("Email o contraseña incorrecta");
      }

      const correctPassword = await bcrypt.compare(
        password,
        foundUser.password
      );

      if (!correctPassword) {
        throw new Error("Email o contraseñá incorrecta");
      }

      const token = signToken(foundUser);

      res
        .cookie("jwt", token, {
          httpOnly: true,
        })
        .send();
    } catch (error) {
      next(error);
    }
  },
  loginWithGoogle: async (req, res, next) => {
    try {
      const { tokenId } = req.body;

      const data = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const { email, name } = data.getPayload();

      const foundUser = await User.findOne({ email });

      if (!foundUser) {
        //crear nuevo usuario y logearlo

        //genera un password aleatorio ya que el modelo User tiene el campo password como required
        const password =
          Math.random().toString(36).slice(2) +
          Math.random().toString(36).slice(2);

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
          email,
          name,
          password: hashedPassword,
        });

        await newUser.save();

        const token = signToken(newUser);

        return res
          .cookie("jwt", token, {
            httpOnly: true,
          })
          .send();
      }

      const token = signToken(foundUser);

      res
        .cookie("jwt", token, {
          httpOnly: true,
        })
        .send();
    } catch (error) {
      next(error);
    }
  },
};
