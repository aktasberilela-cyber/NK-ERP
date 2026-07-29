const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000
require('dotenv').config()

const sequelize = require('./config/database')
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/products')
const orderRoutes = require('./routes/orders')
const messageRoutes = require('./routes/messages')

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/messages', messageRoutes)

app.get('/api/health', (req, res) => res.json({status: 'ok'}))

const start = async ()=>{
  try{
    await sequelize.authenticate()
    await sequelize.sync({ alter: true })
    app.listen(port, ()=> console.log(`Backend running on port ${port}`))
  }catch(err){
    console.error('Failed to start', err)
    process.exit(1)
  }
}

start()
