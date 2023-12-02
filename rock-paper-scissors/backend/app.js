const express = require('express')

const app = express()
app.get('/hello', function(req, res) {
    res.end('Hello Boris')
})

app.listen(5000, function () {
    console.log('Cerver startet')
})

app.use('/static', express.static(`${__dirname}/../frontend`))