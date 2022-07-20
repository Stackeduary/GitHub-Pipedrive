// const express = require('express')
// const router = express.Router()
const https = require('https')
const User = require('../models/user')
const Gists = require('../models/gists')

let options = {
    hostname: 'api.github.com',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
    },
    OAuth: process.env.OAUTH_TOKEN
}

// get all gists for a given user from the GitHub API
const getAllGists = async (request, response) => {
    const user = request.params.user
    options.path = `/users/${user}/gists`
    https.get(options, apiResponse => {
        apiResponse.pipe(response)
    }).on('error', err => {
        console.log(err)
        response.status(500).send('Something went wrong.')
    })
}

// get a specific gist for a given user from the GitHub API
const getGist = async (request, response) => {
    const gistID = request.params.user
    options.path = `/gists/${gistID}`
    https.get(options, apiResponse => {
        apiResponse.pipe(response)
    }).on('error', err => {
        console.log(err)
        response.status(500).send('Something went wrong.')
    })
}

router.get('/users/:user/gists', getAllGists)
router.get('/gists/:gistID', getGist)

// get the gists for a specific user that were added since the last visit
router.get('/', async (request, response) => {
    try {
        const gists = await Gists.find()
        response.json(gists)
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
})

// post the gists for a specific user that were added since the last visit
router.post('/', async (request, response) => {
    const gists = new Gists({
        user: request.body.user,
        gist: request.body.gist,
        dateAdded: request.body.dateAdded
    })
    try {
        const newGists = await gists.save()
        response.status(201).json(newGists)
    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
})

module.exports = router