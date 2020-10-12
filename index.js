require('dotenv').config
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 7000

// middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// routes
app.use('/api/v1', require('./routes/slack-routes'))

app.listen(port, () =>  {
    console.log(`Server is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('hi')
})
