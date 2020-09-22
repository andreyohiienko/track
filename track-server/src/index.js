const express = require('express')
const mongoose = require('mongoose')
const keys = require('../config/keys')

const app = express()

mongoose.connect(keys.mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance')
})
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err)
})

app.get('/', (req, res) => {
  res.send('Hi there')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
