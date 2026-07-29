const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
require('dotenv').config()

router.post('/register', async (req, res) => {
  try{
    const { name, email, password } = req.body
    if(!email || !password) return res.status(400).json({error:'email and password required'})
    const exists = await User.findOne({ where: { email } })
    if(exists) return res.status(400).json({ error: 'email exists' })
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
    const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET || 'secret', { expiresIn: '8h' })
    res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } })
  }catch(err){
    console.error(err)
    res.status(500).json({error:'failed'})
  }
})

module.exports = router
