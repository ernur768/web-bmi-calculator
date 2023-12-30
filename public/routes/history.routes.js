const express = require('express')
const router = express.Router()

router.get('/history', (req, res) => {
    res.sendFile('history.html', {root: './public/views'})
})
module.exports = router