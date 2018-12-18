const mongoose = require('mongoose')
const schemaConfig = { strict: false }

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  schemaConfig
)

module.exports = mongoose.model('Note', NoteSchema) // this creates a mongo collection called 'notes'->automatically pluralised
