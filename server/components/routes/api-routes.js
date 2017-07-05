const bodyParser = require('body-parser')
const Boom = require('boom')

module.exports = function(options = {}) {

    function start({ app }, cb) {

        app.use(bodyParser.json())

        app.get('/api/1.0/customers', (req, res, next) => {
            res.json([{ id: 1, title: 'Mr', firstName: 'Bob', lastName: 'Holness', dateOfBirth: new Date('1928/11/12') }])
        })

        app.get('/api/1.0/customers/:id', (req, res, next) => {

        })

        app.post('/api/1.0/customers/:id?', (req, res, next) => {

            if (!req.body) return next(Boom.badRequest('Invalid or missing body'))
            if (!req.body.id) return next(Boom.badRequest('Invalid or missing id'))
            if (req.params.id && req.params.id !== req.body.id) return next(Boom.badRequest('Id in url and body do not match'))
            if (!req.body.firstName) return next(Boom.badRequest('Invalid or missing firstName'))
            if (!req.body.lastName) return next(Boom.badRequest('Invalid or missing lastName'))
            if (!req.body.dateOfBirth) return next(Boom.badRequest('Invalid or missing dateOfBirth'))


        })

        app.delete('/api/1.0/customers/:id', (req, res, next) => {

        })

        cb()
    }

    return {
        start: start
    }
}
