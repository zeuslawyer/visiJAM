// should reuse existing connection if available, else create new one
const mongoose = require('mongoose')
const secrets = require('../../../secrets')
const uri = process.env.MONGO_URI ? process.env.MONGO_URI : secrets.URI

// requiring mongoose, by default, follows a singleton pattern

function setupDb(lambda_callback) {
  mongoose.connect(
    uri,
    { useNewUrlParser: true }
  )
  const db = mongoose.connection
  db.on('error', function(err) {
    console.log('Failed to connect to db because: ', err.message)
    return lambda_callback({ statusCode: 500, body: err.message }, null)
  })
  db.once('open', function() {
    console.log('CONNECTED!')
  })
}

module.exports = setupDb
