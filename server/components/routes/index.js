const System = require('systemic')
const adminRoutes = require('./admin-routes')
const apiRoutes = require('./api-routes')
const proxyRoutes = require('./proxy-routes')

module.exports = new System({ name: 'routes' })
    .add('routes.admin', adminRoutes()).dependsOn('config', 'logger', 'app', 'middleware.prepper', 'manifest')
    .add('routes.api', apiRoutes()).dependsOn('config', 'logger', 'app', 'middleware.prepper')
    .add('routes.proxy', proxyRoutes()).dependsOn('config', 'logger', 'app', 'middleware.prepper')
    .add('routes').dependsOn('routes.admin', 'routes.api')
