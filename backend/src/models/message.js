const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/database')

class Message extends Model {}
Message.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  from: { type: DataTypes.STRING },
  to: { type: DataTypes.STRING },
  body: { type: DataTypes.TEXT }
}, { sequelize, modelName: 'message' })

module.exports = Message
