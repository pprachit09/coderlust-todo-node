const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config

const port = process.env.PORT || 7000

// middleware
app.use(morgan('dev'))

app.listen(port, () =>  {
    console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('hi')
})
