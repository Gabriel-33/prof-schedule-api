const express = require('express')
const app = express()
const router = require('./src/router')
require('dotenv').config() 

const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome to web API')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

app.listen(8080, () => {console.log('Server running on port 3000')})