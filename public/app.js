const config = require('config')
const cors = require('cors')
const {json} = require("express");

const mongoose = require('mongoose')

const home = require('./routes/home.routes')
const history = require('./routes/history.routes')
const calculate = require('./routes/bmicalculator.router')
const getHistory = require('./routes/getHistory.router')

const express = require('express')
const app = express()

app.use(cors())
app.use(json());

app.use('/', home)
app.use('/', history)
app.use('/', calculate)
app.use('/', getHistory)

const port = config.get('port')
const dbUrl = config.get('dbUrl')

async function run() {
    app.listen(port)
    await mongoose.connect(`${dbUrl}`)
}
run()