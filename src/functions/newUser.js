const mongoose = require('mongoose')
const User = require('./Models/User.Model')
const setupDb = require('./db.helpers/setupDb.helper.js')

module.exports.handler = (event, context, callback) => {
  console.log('\n ****NEW USER ENDPOINT TRIGGERED....***\n')
  setupDb(callback)
  context.callbackWaitsForEmptyEventLoop = false
  var formData = JSON.parse(event.body)
  console.log('FORM DATA IS A JS OBJECT >>>>>', formData)
  console.log('EVENT BODY IS a JSON STRING >>>>>', event.body)
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
      console.log('USER SAVED and RETURNED..... ', user)
      mongoose.connection.close()
      callback(null, {
        statusCode: 200,
        headers: {
          // 'Access-Control-Allow-Origin': '*', // this is NO LONGER as form submit url is fixed to match proxy.
          // 'Access-Control-Allow-Headers': 'Content-Type',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(user),
      })
    }
  })
}

