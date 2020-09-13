require('dotenv').config()

const {
  PORT,
  MONGO_HOST,
  MONGO_DBNAME,
  LOCAL_DEV
} = process.env

const MONGO_URI = (() => {
  const URI = `mongodb://${MONGO_HOST}/${MONGO_DBNAME}`

  return URI
})()

module.exports = {
  PORT,
  MONGO_URI,
  LOCAL_DEV
}