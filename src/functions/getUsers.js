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

  console.log('\nparam of request>>> ', event.pathParameters)
  console.log('\nPATH of request>>> ', event.path)
  getUsers(callback)
}

function getUsers(callback) {
  console.log('FINDING.....\n')
  User.find({})
    .then(users =>
      callback(null, { statusCode: 200, body: JSON.stringify(users) })
    )
    .catch(err => callback({ statusCode: 400, body: err.message }, null))
}

// console.log('method of request>>> ', event.httpMethod)
// console.log('param of request>>> ', event.pathParameters)
// console.log('PATH of request>>> ', event.path)
// console.log('Queries of request>>> ', event.queryStringParameters)
// console.log('HEADERS of request>>> ', event.headers)
// console.log('body of request>>> ', event.body)
