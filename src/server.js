// require('dotenv').config()
// // const express = require('express')
// // const bodyParser = require('body-parser')
// // const cors = require('cors')
// const api = require('./routes/api')
// // const { Router } = require('express')
// // const mongoose = require('mongoose')
// const { ApolloServer, gql } = require('apollo-server-express')

// const typeDefinitions = gql`
//     type Query {
//         user: String
//     }
// `

// const resolvers = {
//     Query: {
//         user: () => `name is: ${name}`
//     }
// }

// const server = new ApolloServer({ typeDefinitions, resolvers })

// const app = express()
// const port = process.env.SERVER_PORT || 3000
// server.applyMiddleware({ app })

// app.use(bodyParser.json())
// app.use(cors())

// app.use((request, response, next) => {
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     response.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS')
//     response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')
//     response.setHeader('Access-Control-Allow-Credentials', true)
//     next()
// })

// app.use('/api', api)
// app.get('/', response => {
//     response.send('Server is running.')
// })

// mongoose.connect(process.env.DATABASE_URL,
//     {
//         useNewUrlParser: true
//     }
// )

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error: '))
// db.once('open', () => {
//     console.log('Connected successfully')
// })

// app.listen(port, () => {
//     console.log(`Server is ready at http://localhost:${port}${server.graphqlPath}.`)
// })