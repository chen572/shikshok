const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const initDb = require('./server/lib/init-db')
const api = require('./server/routers')

const { PORT, LOCAL_DEV } = require('./server/consts')

const reactDevCookies = (app) => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    res.header('Access-Control-Allow-Credentials', 'true')
    return next()
  })
}

const bootstrap = async (app) => {
  await initDb()

  app.use(bodyParser.json({ limit: '50mb', extended: true }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  app.use(cookieParser())

  if (LOCAL_DEV) {
    reactDevCookies(app)
  }

  app.use('/api/v1', api)

  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
  })
}

const app = express()

bootstrap(app)