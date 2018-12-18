const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let isConnected = false
const { URI } = require('../../../secrets')

const connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection')
    return Promise.resolve()
  }

  console.log('=> using new database connection')
  return mongoose.connect(URI).then(db => {
    isConnected = db.connections[0].readyState
  })
}

module.exports = connectToDatabase
