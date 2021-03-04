const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Debe ingresar un email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Debe ingresar una contraseña"],
    },
    direcciones: [{ type: String }],

    telefono: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
