const mongoose = require('mongoose')

const Card = mongoose.model('Card', {
  title: String,
  question: String,
  answer: String,
  isBookmarked: Boolean,
  doPractice: Boolean,
  tags: [String],
})

module.exports = Card
