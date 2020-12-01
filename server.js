const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const app = express();
require('dotenv').config()

//MongoDB Connection
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true},() => {
  console.log("Connected to DB")
})

//Middlewares
app.use(cors())
app.use(helmet())

//Routes
app.get('/', (req,res) => {
    res.json({app: "asdasdsad"})  })

const PORT = process.env.port || 5050
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))