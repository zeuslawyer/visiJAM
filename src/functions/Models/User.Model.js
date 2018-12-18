const mongoose = require('mongoose')
const schemaConfig = { strict: false }

const UserSchema = new mongoose.Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
  },
  schemaConfig
)

module.exports = mongoose.model('User', UserSchema) // this creates a mongo collection called 'notes'->automatically pluralised
