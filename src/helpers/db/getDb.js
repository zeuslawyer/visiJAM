'use strict'
const MongoClient = require('mongodb').MongoClient

const secrets = require('../../../secrets.js')
const uri = secrets.URI

// TODO: limit IP access->> https://www.mongodb.com/blog/post/serverless-development-with-nodejs-aws-lambda-mongodb-atlas

let cachedClient = null
let config = { useNewUrlParser: true }

function connectToDatabase(uri) {
  console.log('=> connecting to database....\n')

  if (cachedClient) {
    console.log('=> using cached database instance')
    return Promise.resolve(cachedClient.db('visiJAM-DB'))
  }

  return MongoClient.connect(
    uri,
    config
  )
    .then(client => {
      cachedClient = client
      return cachedClient.db('visiJAM-DB')
    })
    .catch(err => console.log(err.message))
}

module.exports = connectToDatabase(uri)
