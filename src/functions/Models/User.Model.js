const mongoose = require('mongoose')
const schemaConfig = { strict: false }

const UserSchema = new mongoose.Schema(
  //TODO: update schema - leave config non strict
  {
    email: String,
    firstName: String,
    lastName: String,
    joinDate: {
      type: Date,
      default: Date.now,
    },
  },
  schemaConfig
)

module.exports = mongoose.model('User', UserSchema) // this creates a mongo collection called 'notes'->automatically pluralised
