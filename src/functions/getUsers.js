'use strict'
const MongoClient = require('mongodb').MongoClient
// import secrets from '../../secrets'
const secrets = require('../../secrets.js')
const uri = secrets.uri

// TODO: limit IP access->> https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas

let cachedClient = null

function connectToDatabase(uri) {
  console.log('=> connect to database')

  if (cachedClient) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedClient)
  }

  return MongoClient.connect(uri).then(client => {
    cachedClient = client
    return cachedClient
  })
}

function queryDatabase(client) {
  console.log('=> query database')

  return (
    client
      .db('visiJAM-DB')
      .collection('users')
      // .find({ username: 'test' })
      .find({})
      .toArray()
      .then(arr => {
        console.log('ZUBIN: >>>>>>>   ', arr)
        return { statusCode: 200, body: 'success' }
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
