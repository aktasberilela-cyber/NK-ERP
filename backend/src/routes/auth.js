const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

// simple in-memory sync helper
const ensureDb = async () => {
  const sequelize = require('../config/database')
  await sequelize.authenticate()
  await sequelize.sync()
}

router.post('/register', async (req, res) => {
  try{
    const { name, email, password } = req.body
    if(!email || !password) return res.status(400).json({error:'email and password required'})
    const hash = await bcrypt.hash(password, 10)
    const user = await User.create({ name: name || email, email, passwordHash: hash })
    res.json({ id: user.id, email: user.email })
  }catch(err){
    console.error(err)
    res.status(500).json({error: 'failed'})
  }
})

router.post('/login', async (req, res) => {
  try{
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if(!user) return res.status(401).json({error:'invalid'})
    const ok = await bcrypt.compare(password, user.passwordHash)
    if(!ok) return res.status(401).json({error:'invalid'})
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '8h' })
    res.json({ token })
  }catch(err){
    console.error(err)
    res.status(500).json({error:'failed'})
  }
})

// initialize DB on first load (for prototype only)
ensureDb().catch(e=>console.error('db init failed', e))

module.exports = router
