require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const media = require('./server/routers/media')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/media', media)

const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})