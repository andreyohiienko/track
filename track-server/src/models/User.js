const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true, // !!! avoid to save same user
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

mongoose.model('User', userSchema)
