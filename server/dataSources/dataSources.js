const MongoClient = require('./mongoClient')

class DataSources {
  constructor() {
    this.mongoClient = new MongoClient()
  }
}

const dataSources = new DataSources()
module.exports = dataSources