'use strict'
const MongoClient = require('mongodb').MongoClient
// const secrets = require('../../secrets.js')
// const uri = process.env.MONGO_URI || secrets.URI
const uri = process.env.MONGO_URI

// TODO: limit IP access->> https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas

let cachedClient = null

function connectToDatabase(uri) {
  console.log('=> connect to database')

  if (cachedClient) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedClient.db('visiJAM-DB'))
  }

  return MongoClient.connect(uri).then(client => {
    cachedClient = client
    return cachedClient.db('visiJAM-DB')
  })
}

function queryDatabase(db) {
  //REFERENCE: docs are http://mongodb.github.io/node-mongodb-native/3.1/api/Cursor.html#toArray
  console.log('=> query database')
  return (
    db
      .collection('users')
      // .find({ username: 'test' })
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
  )
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  connectToDatabase(uri)
    .then(client => queryDatabase(client))
    .then(result => {
      console.log('=> returning result: ', result)
      callback(null, result)
    })
    .catch(err => {
      console.log('=> an error occurred: ', err)
      callback(err)
    })
}
