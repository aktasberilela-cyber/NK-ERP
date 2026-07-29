const sequelize = require('./config/database')
const User = require('./models/user')
const Product = require('./models/product')
const Message = require('./models/message')

async function seed(){
  await sequelize.sync({ force: true })
  const bcrypt = require('bcrypt')
  const hash = await bcrypt.hash('admin123', 10)
  await User.create({ name: 'Admin', email: 'admin@example.com', passwordHash: hash, role: 'admin' })
  await Product.bulkCreate([
    { code: 'P001', name: 'İlaç A', brand: 'Marka X', manufacturer: 'Firma A', lot: 'L001', expiry: '2025-12-31', price: 12.50, stock: 50 },
    { code: 'P002', name: 'İlaç B', brand: 'Marka Y', manufacturer: 'Firma B', lot: 'L002', expiry: '2024-08-31', price: 8.30, stock: 120 }
  ])
  await Message.create({ from: 'Admin', to: 'Tüm', body: 'Sistem başlatıldı' })
  console.log('Seed finished')
  process.exit(0)
}

seed().catch(e=>{console.error(e);process.exit(1)})
