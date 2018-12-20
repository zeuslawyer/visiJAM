'use strict'
const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./Models/User.Model')
const secrets = require('../../secrets')
const uri = process.env.MONGO_URI ? process.env.MONGO_URI : secrets.URI
const DB_NAME = process.env.PROD_DB ? process.env.PROD_DB : 'visiJAM-DB'

/*
    this is an express server.  
    Reference tutorial:  https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/#express-via-serverless-http
    Reference Repo:  https://github.com/neverendingqs/netlify-express/blob/master/express/server.js
    tutorial also mentions how to do React SSR using netlify + lambda + express
*/

const app = express()
const router = express.Router()
mongoose.connect(
  uri,
  { useNewUrlParser: true, dbName: DB_NAME }
)

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// path must route to netlify lambda path
app.use('/.netlify/functions/server', router)

//********************ROUTES ************************** //

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Hello from VisiJAM!</h1>')
  res.end()
})
router.get('/test', (req, res) => {
  res.send('OK!')
})
router.get('/users', function(req, res) {
  console.log('\n **** GET ALL USERS ROUTE TRIGGERED....***\n')
  // console.log('\nPATH of request>>> ', req.path)

  User.find({}).exec(function(err, users) {
    if (err) {
      console.error('error retrieving users...')
      res.send('error occured')
    } else {
      // console.log(users)
      res.json(users)
    }
  })
})

router.post('/user/new', function(req, res) {
  console.log('\n **** POST NEW USER ROUTE TRIGGERED....***\n')
  User.create(req.body, function(err, user) {
    if (err) {
      res.send('error saving new user......')
      console.error('error saving new user......')
    } else {
      console.log(user)
      res.json(user)
    }
  })
})

module.exports = app
module.exports.handler = serverless(app)
