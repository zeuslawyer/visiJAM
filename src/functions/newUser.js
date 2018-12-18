const mongoose = require('mongoose')
const User = require('./Models/User.Model')
const Note = require('./Models/Note.model')
const secrets = require('../../secrets')

const uri = process.env.MONGO_URI ? process.env.MONGO_URI : secrets.URI

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

setupDb()

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  var formData = JSON.parse(event.body)
  console.log('EVENT BODY IS >>>>>', formData)
  createUser(formData, callback)
}

// send form Data to database and save
function createUser(formData, callback) {
  User.create(formData, function(err, user) {
    if (err) {
      console.log('error saving User', err)
      mongoose.connection.close()
      callback(err, null)
    } else {
      console.log(user)
      mongoose.connection.close()
      callback(null, {
        statusCode: 200,
        headers: headers,
        body: JSON.stringify(user),
      })
    }
  })
}

function setupDb() {
  mongoose.connect(uri)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function() {
    console.log('CONNECTED!')
  })
}
