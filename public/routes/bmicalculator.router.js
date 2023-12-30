const express = require('express')
const router = express.Router()
const Calculation = require('../models/Calculation')

function calculateBMI(weight, height) {
    height = height / 100
    return (weight / (height * height)).toFixed(2)
}

function interpretBMI(bmi, age, gender) {
    if (gender === 'female') {
        bmi = bmi * 1.1
    }
    if (age < 18) {
        bmi = bmi * 1.1
    }
    else if (age > 60) {
        bmi = bmi * 0.9
    }

    if (bmi < 18.5) {
        return 'Underweight'
    }
    else if (bmi < 25) {
        return 'Normal weight'
    }
    else if (bmi < 30) {
        return 'Overweight'
    }
    else {
        return 'Obese'
    }
}

router.post('/bmicalculator', (req, res) => {
    const { weight, height, age, gender } = req.body
    const bmi = calculateBMI(weight, height)
    const message = interpretBMI(bmi, age, gender)

    Calculation.create({
        weight,
        height,
        bmi,
        age,
        gender,
        date: new Date()
    })
    .then(() => {
        res.send({
            bmi: bmi,
            result: message
        })
    })


})

module.exports = router