const mongoose = require('mongoose')
require('dotenv').config() 

const mongoConnection = mongoose.createConnection(process.env.mongodb)
module.exports = mongoConnection