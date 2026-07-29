const { Sequelize } = require('sequelize')
require('dotenv').config()
const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/nkerp'

const sequelize = new Sequelize(dbUrl, { dialect: 'postgres', logging: false })

module.exports = sequelize
