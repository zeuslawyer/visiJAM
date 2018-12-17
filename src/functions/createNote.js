'use strict'

// require('dotenv').config({ path: './variables.env' });

const connectToDatabase = require('../helpers/db/db.js')
const Note = require('./Models/Note')

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const { name } = JSON.parse(event.body)
  console.log('LOOK HERE>>>  ', JSON.parse(event.body))

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: JSON.parse(event.body) }),
  })
  // return connectToDatabase()
  //   .then(() => Note.create(JSON.parse(event.body)))
  //   .then(note =>
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify(note),
  //     })
  //   )
  //   .catch(err =>
  //     callback(null, {
  //       statusCode: err.statusCode || 500,
  //       headers: { 'Content-Type': 'text/plain' },
  //       body: 'Could not create the note.',
  //     })
  //   )
}
