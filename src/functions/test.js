'use strict'

// import secrets from '../../secrets'
const secrets = require('../../secrets.js')
const assert = require('assert')

const uri = secrets.uri
const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(uri)

exports.handler = function(event, context, callback) {
  // Use connect method to connect to the Server
  client.connect(function(err) {
    assert.equal(null, err)
    console.log('Connected successfully to server')

    const db = client.db('VisiJAM-DB')

    client.close()
  })

  callback(null, {
    statusCode: 200,
    body: 'This works!',
  })
}
