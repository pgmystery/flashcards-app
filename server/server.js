const express = require('express') // Server Libary
const cors = require('cors') // Libary to allow request to the server globally
// const path = require('path')

// console.log(path.resolve('.'))
// console.log(process.cwd())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/flashcards-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


const server = express()
server.listen(3333, () => console.log('Server ready on port 3333'))
server.use(express.json()) // To accept json as request data
server.use(cors())
server.set('json spaces', 2) // to make the json response for humans readable

server.use('/cards', require('./routes/cards'))
// server.use('/users', require('./routes/users'))
