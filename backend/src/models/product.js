const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/database')

class Product extends Model {}
Product.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  code: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  brand: { type: DataTypes.STRING },
  manufacturer: { type: DataTypes.STRING },
  lot: { type: DataTypes.STRING },
  expiry: { type: DataTypes.DATE },
  price: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  stock: { type: DataTypes.INTEGER, defaultValue: 0 }
}, { sequelize, modelName: 'product' })

module.exports = Product
