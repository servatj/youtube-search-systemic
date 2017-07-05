const System = require('systemic')
const path = require('path')

module.exports = function() {
    return new System({ name: 'youtube-search' }).bootstrap(path.join(__dirname, 'components'))
}
