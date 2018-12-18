const secrets = require('../../secrets')
const mongoose = require('mongoose')
const uri = secrets.URI

const Note = require('./Models/Note.model')

mongoose.connect(uri)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('CONNECTED!')
})

var note1 = {
  title: 'Note 10',
  description: 'Created using create1 function',
}
var note2 = {
  title: 'Note 3',
  description: 'Created using an endpoint',
  author: 'Moby Dick',
  date: new Date().toLocaleDateString,
}

// create1(note1)
// create2(note2)

function create1(body) {
  var newNote = new Note()
  let { title, description } = body

  newNote.title = title
  newNote.description = description

  newNote.save(function(err, note) {
    if (err) {
      console.log('error saving note...')
      //   callback()
    } else {
      console.log(note)
      // callback()
    }
  })
}

function create2(body) {
  Note.create(body, function(err, note) {
    if (err) {
      console.log('error saving note...')
      //callback()
    } else {
      console.log(note)
      //   callback()
    }
  })
}

module.exports.handler = (event, context, callback) => {
  callback(null, { status: '200', body: 'this is the mongoose.js file' })
}
