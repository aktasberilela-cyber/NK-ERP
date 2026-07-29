const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/database')
const Product = require('./product')

class Order extends Model {}
Order.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  customer: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
  total: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 }
}, { sequelize, modelName: 'order' })

const OrderItem = sequelize.define('order_item', {
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  price: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 }
})

Order.belongsToMany(Product, { through: OrderItem })
Product.belongsToMany(Order, { through: OrderItem })

module.exports = { Order, OrderItem }
