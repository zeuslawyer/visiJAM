const mongoose = require('mongoose')
const User = require('./Models/User.Model')
const setupDb = require('./db.helpers/setupDb.helper.js')

module.exports.handler = (event, context, callback) => {
  console.log('\n **** GET ALL USERS ENDPOINT TRIGGERED....***\n')
  setupDb(callback)
  context.callbackWaitsForEmptyEventLoop = false

  if (event.httpMethod !== 'GET') {
    return callback({ statusCode: 405, body: 'only GET methods allowed' }, null)
  }
  getUsers(callback)
}

function getUsers(callback) {
  console.log('FINDING.....')
  User.find({})
    .then(users =>
      callback(null, { statusCode: 200, body: JSON.stringify(users) })
    )
    .catch(err => callback({ statusCode: 400, body: err.message }, null))
}
