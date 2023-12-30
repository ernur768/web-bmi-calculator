const {model, Schema} = require('mongoose')

const calculation = new Schema({
    weight: Number,
    height: Number,
    age: Number,
    gender: String,
    date: Date,
    bmi: Number,
})

module.exports = model('Calculation', calculation)