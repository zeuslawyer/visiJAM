'use strict'
const MongoClient = require('mongodb').MongoClient

const { URI } = require('../../secrets.js')
const uri = process.env.MONGO_URI ? process.env.MONGO_URI : URI

// TODO: limit IP access->> https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas

let cachedClient = null

function connectToDatabase(uri) {
  //existing connection
  if (cachedClient) {
    return Promise.resolve(cachedClient.db('visiJAM-DB'))
  }
  return MongoClient.connect(uri).then(connection => {
    cachedClient = connection
    return cachedClient.db('visiJAM-DB')
  })
}

function queryDatabase(db, collection) {
  return db
    .collection(collection)
    .find({})
    .toArray()
    .then(arr => {
      // console.log('DATABASE RESULT:::: :', arr)
      return { statusCode: 200, body: JSON.stringify(arr) }
    })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      return { statusCode: 500, body: 'error' }
    })
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  connectToDatabase(uri)
    .then(db => queryDatabase(db, 'users'))
    .then(result => {
      console.log('=> returning result: ', result)
      callback(null, result)
    })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      callback(err)
    })
}
