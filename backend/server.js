require('dotenv').config()
const express = require('express')
const cors = require('cors')
const collectionRoutes = require('./routes/collection')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

app.use('/collection', collectionRoutes)

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`)
})
