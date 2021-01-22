const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "Debe ingresar un nombre"],
    },
    email: {
      type: String,
      required: [true, "Debe ingresar un email"],
      unique,
    },
    password: {
      type: String,
      required: [true, "Debe ingresar una contraseña"],
    },
    direcciones: [
      { type: String, required: [true, "Debe ingresar una dirección"] },
    ],

    telefono: {
      type: String,
      required: [true, "Debe ingresar un número de teléfono"],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
