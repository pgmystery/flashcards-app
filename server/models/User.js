const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    // min: [18, 'You are too young!'],
    validate: [checkAge, 'You are too young!']
  },
  email: String,
}, {
  // toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

userSchema.virtual('name')
  .get(function() {
    return this.firstName + ' ' + this.lastName
  })

userSchema.virtual('salary')
  .get(function() {
    return this.age * 1000
  })

function checkAge(age) {
  return age >= 18
}

const User = mongoose.model('User', userSchema)

module.exports = User
