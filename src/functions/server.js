'use strict'
const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./Models/User.Model')
const secrets = require('../../secrets')
const uri = process.env.MONGO_URI ? process.env.MONGO_URI : secrets.URI

/*
    this is an express server.  
    Reference tutorial:  https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/#express-via-serverless-http
    Reference Repo:  https://github.com/neverendingqs/netlify-express/blob/master/express/server.js
    tutorial also mentions how to do React SSR using netlify + lambda + express
*/

const app = express()
const router = express.Router()
mongoose.connect(
  'mongodb+srv://teamAccess:teamVisi_2018@visijam-db-jfc5t.mongodb.net/visiJAM-DB?retryWrites=true',
  { useNewUrlParser: true }
)

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use('/.netlify/functions/server', router) // path must route to lambda

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<h1>Hello from VisiJAM!</h1>')
  res.end()
})

router.get('/users', function(req, res) {
  console.log('\n **** GET ALL USERS ENDPOINT TRIGGERED....***\n')
//   console.log('\nPATH of request>>> ', req.path)

  User.find({}).exec(function(err, users) {
    if (err) {
      res.send('error occured')
    } else {
      //   console.log(users)
      res.json(users)
    }
  })
})
// router.get('/users', (req, res) => res.json({ req: req.method }))

router.post('/test', (req, res) => res.json({ postBody: req.body }))

module.exports = app
module.exports.handler = serverless(app)
