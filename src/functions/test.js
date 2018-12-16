'use strict'
const MongoClient = require('mongodb').MongoClient

const secrets = require('../../secrets.js')
const uri = secrets.URI

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
    .catch(err =>
      console.log('ERRRRRROOOORRRR!!!!!!!!!!>>>>>>   ', err.message)
    )
}

// exports.handler = async function(event, context, callback) {
//   let fetched = await database

//   fetched
//     // .db('visiJAM-DB')
//     .collection('users')
//     .find({})
//     .toArray()
//     .then(data => {
//       callback(null, { statusCode: 200, body: JSON.stringify(data) })
//     })
// }
