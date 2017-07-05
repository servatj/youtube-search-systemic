const System = require('systemic')
const optional = require('optional')
const clock = require('groundhog-day').real
const path = require('path')
const manifest = optional(path.join(process.cwd(), 'manifest.json')) || {}
const pkg = require(path.join(process.cwd(), 'package.json'))

module.exports = new System({ name: 'app' })
    .add('manifest', manifest)
    .add('pkg', pkg)
    .add('clock', clock())
