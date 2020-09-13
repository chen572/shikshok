require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const product = require('./server/routers/Product')
const store = require('./server/routers/Store')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/products', product)
app.use('/store', store)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})