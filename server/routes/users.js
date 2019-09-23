const router = require('express').Router()
// const uid = require('uid') // Libary to create uid's
// const { saveFile, readFile } = require('../fileUtils')

const User = require('../models/User')

// let users = []

// start()

// async function start() {
//   try {
//     users = JSON.parse(await getUsersDataFromFile()).map(user => ({
//       id: uid(),
//       ...user,
//     }))
//   } catch (err) {
//     console.log('ERROR', err)
//   }
// }

// function getUsersDataFromFile() {
//   return readFile('users')
// }

router.get('/', (req, res) => {
  // console.log("TEST")
  User.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  // User.create(req.body, false, {runValidators: true})
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


module.exports = router
