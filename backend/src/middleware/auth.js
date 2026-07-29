const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = function auth(req, res, next){
  const authHeader = req.headers['authorization'] || ''
  const token = authHeader.replace('Bearer ','')
  if(!token) return res.status(401).json({ error: 'no token' })
  try{
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret')
    req.user = data
    next()
  }catch(e){
    return res.status(401).json({ error: 'invalid token' })
  }
}
