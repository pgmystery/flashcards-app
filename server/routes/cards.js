const router = require('express').Router()
// const uid = require('uid') // Libary to create uid's
// const { saveFile, readFile } = require('../fileUtils')

const Card = require('../models/Card')


// let cards = []

// start()

// async function start() {
//   try {
//     cards = JSON.parse(await getCardsDataFromFile()).map(card => ({
//       id: uid(),
//       ...card,
//     }))
//   } catch (err) {
//     console.log('ERROR', err)
//   }
// }

// function getCardsDataFromFile() {
//   return readFile('cards')
// }

router.get('/', (req, res) => {
  Card.find()
    .then(cards => res.json(cards))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Card.findById(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Card.create(req.body)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(card => res.json(card))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(card => res.json(card))
    .catch(err => res.json(err))
})


module.exports = router