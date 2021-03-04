const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
require("dotenv").config();

const userRoutes = require("./routes/user");

//MongoDB Connection
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Connected to DB");
  }
);

//Middlewares
app.use(cors());
app.use(helmet());
app.use(bodyparser.json());

//Routes
app.use("/api/user", userRoutes);

const PORT = process.env.port || 5050;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
