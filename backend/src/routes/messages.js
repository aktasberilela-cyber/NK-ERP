const express = require('express')
const router = express.Router()
const Message = require('../models/message')
const auth = require('../middleware/auth')

router.get('/', auth, async (req, res)=>{
  const msgs = await Message.findAll({ order: [['id','DESC']] })
  res.json(msgs)
})

router.post('/', auth, async (req, res)=>{
  const m = await Message.create(req.body)
  res.json(m)
})

module.exports = router
