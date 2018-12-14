'use strict'
const MongoClient = require('mongodb').MongoClient
// import secrets from '../../secrets'
const secrets = require('../../secrets.js')
const uri = secrets.uri


const DB_NAME = 'VisiJAM-DB'

let cachedDb = null

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  // console.log('event: ', event);
  connectToDatabase(uri)
    .then(db => queryDatabase(db))
    .then(result => {
      console.log('=> returning result: ', result)
      callback(null, result)
    })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      callback(err)
    })
}

function connectToDatabase(uri) {
  console.log('=> connect to database')

  if (cachedDb) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedDb)
  }

  return MongoClient.connect(uri).then(db => {
    console.log(uri, '<<<<THIS IS THE URI>>>>>')
    cachedDb = db
    return cachedDb
  })
}

function queryDatabase(db) {
  console.log('=> query database')

  return db
    .collection('users')
    .find({})
    .toArray()
    .then(data => {
      console.log('data.....', data)
      return { statusCode: 200, body: 'success' }
    })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      return { statusCode: 500, body: 'error' }
    })
}
