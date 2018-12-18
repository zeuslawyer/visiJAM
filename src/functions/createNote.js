'use strict'

// require('dotenv').config({ path: './variables.env' });

// const connectToDatabase = require('../helpers/db/db.js')
// const Note = require('./Models/Note')

module.exports.handler = (event, context, callback) => {
  callback(null, { status: '200', body: 'this is the mongoose.js file' })
}
