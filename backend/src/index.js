const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const authRoutes = require('./routes/auth')

app.use(express.json())
app.use('/api/auth', authRoutes)

app.get('/api/health', (req, res) => res.json({status: 'ok'}))

app.listen(port, () => console.log(`Backend running on port ${port}`))
