const express = require('express')
const router = express.Router()
const Calculations = require('../models/Calculation')

router.get('/getHistory', (req, res) => {
    Calculations.find().sort({date: -1})
        .then(data => res.send(data))
})

module.exports = router