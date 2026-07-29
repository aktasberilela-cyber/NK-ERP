const express = require('express')
const router = express.Router()
const { Order, OrderItem } = require('../models/order')
const Product = require('../models/product')
const auth = require('../middleware/auth')

router.get('/', auth, async (req, res)=>{
  const orders = await Order.findAll({ include: Product })
  res.json(orders)
})

router.post('/', auth, async (req, res)=>{
  const { customer, items } = req.body
  const order = await Order.create({ customer })
  let total = 0
  for(const it of items){
    const p = await Product.findByPk(it.productId)
    if(!p) continue
    await OrderItem.create({ orderId: order.id, productId: p.id, quantity: it.quantity, price: p.price })
    total += Number(p.price) * Number(it.quantity)
    // reduce stock (simple)
    p.stock = Math.max(0, p.stock - it.quantity)
    await p.save()
  }
  order.total = total
  await order.save()
  res.json(order)
})

module.exports = router
