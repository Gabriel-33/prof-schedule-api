const express = require('express')
const courseRouter = express.Router()
const jwt = require('jsonwebtoken')
const {listar_local, cadastrar_local,editar_local} = require('../controllers/local.js')

function auth(req, res, next){
    try{
        jwt.verify(req.headers.authorization, process.env.secret_key)
        next()
    }
    catch{
        res.status(401).send('Invalid Token')
    }
}


courseRouter.get('/listar_local',auth, (req, res) => {
    listar_local(req, res)
})

courseRouter.put('/editar_local_horario',auth, (req, res) => {
    editar_local(req, res)
})

courseRouter.post('/cadastrar_local',auth, (req, res) => {
    cadastrar_local(req, res)
})

module.exports = courseRouter