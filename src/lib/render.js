const views = require('koa-views')
const path = require('path')

// console.log(__dirname)

module.exports = views(path.join(__dirname, '/../views'), {
    map: {
        html: 'swig'
    }
})