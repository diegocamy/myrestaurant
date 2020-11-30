const express = require('express')
const cors = require('cors')
const app = express();


//Middlewares
app.use(cors())

//Routes
app.get('/', (req,res) => {
    res.json({app: "asdasdsad"})  })

const PORT = process.env.port || 5050
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))