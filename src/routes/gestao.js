const express = require('express')
const gestaoRouter = express.Router()
const jwt = require('jsonwebtoken')
const {login} = require('../controllers/gestao')

function auth(req, res, next){
    console.log(req.headers.authorization)
    try{
        jwt.verify(req.headers.authorization, process.env.secret_key)
        next()
    }
    catch{
        res.status(401).send('Invalid Token')
    }
}

gestaoRouter.post('/login', (req, res) => {
    login(req, res)
});

module.exports = gestaoRouter