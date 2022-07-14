const express = require('express')
const router = express.Router()
const https = require('https')

let options = {
    hostname: 'api.github.com',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
    },
    OAuth: process.env.OAUTH_TOKEN
}

const getUser = async (request, response) => {
    const user = request.params.user
    options.path = `/users/${user}`
    https.get(options, apiResponse => {
        apiResponse.pipe(response)
    }).on('error', err => {
        console.log(err)
        response.status(500).send('Something went wrong.')
    })
}

const getRepo = async (request, response) => {
    const user = request.params.user
    options.path = `/repos/${user}/${repoName}`
    https.get(options, apiResponse => {
        apiResponse.pipe(response)
    }).on('error', err => {
        console.log(err)
        response.status(500).send('Something went wrong.')
    })
}

const getCommit = async (request, response) => {
    const user = request.params.user
    options.path = `/repos/${user}/${repoName}`
    https.get(options, apiResponse => {
        apiResponse.pipe(response)
    }).on('error', err => {
        console.log(err)
        response.status(500).send('Something went wrong.')
    })
}

router.get('/github/userinfo/:user', getUser)
router.get('/github/repoinfo/:user/:reponame', getRepo)
router.get('/github/commitinfo/:user/:reponame', getCommit)

module.exports = router