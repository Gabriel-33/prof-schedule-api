const express = require('express')
const areaRouter = express.Router()
const jwt = require('jsonwebtoken')
const {cadastrar_area, editar_area, listar_areas} = require('../controllers/area.js')


function auth(req, res, next){
    try{
        jwt.verify(req.headers.authorization, process.env.secret_key)
        next()
    }
    catch{
        res.status(401).send('Invalid Token')
    }
}

areaRouter.get('/listar_area',auth, (req, res) => {
    listar_areas(req, res)
});

areaRouter.post('/cadastrar_area',auth, (req, res) => {
    cadastrar_area(req, res)
});

areaRouter.put('/editar_area',auth, (req, res) => {
    editar_area(req, res)
});


module.exports = areaRouter