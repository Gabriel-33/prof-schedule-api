const gestaoModel = require('../models/gestao')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  const { email, senha } = req.body;

  const payload = { email: email, senha: senha };

  try {
    const token = jwt.sign(senha, process.env.secret_key);
    const user = await gestaoModel.findOne({ email, senha });
    if(user){
      res.send(token);
    }else{
      res.send("erro");
    }
  } catch (error) {
    res.sendStatus(500);
  }
};
module.exports = {login}