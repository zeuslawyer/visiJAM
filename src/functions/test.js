'use strict'

// const secrets = require('../../secrets.js')
// const uri = process.env.MONGO_URI || secrets.URI
const uri = process.env.MONGO_URI
const database = require('../helpers/db/getDb.js')

exports.handler = async function(event, context, callback) {
  const fetchedDB = await database
  // console.log('FETCHED DB IS:   ', fetchedDB)
  fetchedDB
    .collection('test')
    .find({})
    .toArray()
    .then(data => {
      callback(null, { statusCode: 200, body: JSON.stringify(data) })
    })
    .catch(err => {
      console.log('ERRRRRROOOORRRR!!!!!!!!!!>>>>>>   ', err.message)
      callback(null, { statusCode: 400, body: JSON.stringify(err) })
    })
}
