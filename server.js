const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes/api')
// const { Router } = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(bodyParser.json())
app.use(cors())

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS')
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')
    response.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.use('/api', api)
app.get('/', response => {
    response.send('Server is running.')
})

mongoose.connect('mongodb://localhost:27017/gistsdb',
    {
        useNewUrlParser: true
    }
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', () => {
    console.log('Connected successfully')
})

// replace port with process.env.PORT if this server is deployed on a production host
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})