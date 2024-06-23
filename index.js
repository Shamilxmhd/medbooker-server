require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./Connections/db')
const router = require('./Routes/router')
const MServer = express()

MServer.use(cors())
MServer.use(express.json())
MServer.use(router)

const PORT = 3000 || process.env.PORT

MServer.listen(PORT, () => {
    console.log(`MedBooker Server started at ${PORT}`);
})

MServer.get('/', (req, res) => {
    res.send(`<h1>MedBooker Server started at ${PORT}<h1/>`)
})
