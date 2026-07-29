const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const auth = require('../middleware/auth')

router.get('/', async (req, res)=>{
  const items = await Product.findAll({ order: [['id','DESC']] })
  res.json(items)
})

router.post('/', auth, async (req, res)=>{
  const p = await Product.create(req.body)
  res.json(p)
})

router.get('/:id', async (req, res)=>{
  const p = await Product.findByPk(req.params.id)
  if(!p) return res.status(404).json({})
  res.json(p)
})

router.put('/:id', auth, async (req, res)=>{
  const p = await Product.findByPk(req.params.id)
  if(!p) return res.status(404).json({})
  await p.update(req.body)
  res.json(p)
})

router.delete('/:id', auth, async (req, res)=>{
  const p = await Product.findByPk(req.params.id)
  if(!p) return res.status(404).json({})
  await p.destroy()
  res.json({})
})

module.exports = router
