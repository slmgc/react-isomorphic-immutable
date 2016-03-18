require('babel-register')

// HACK: fix for server-side css-loader
require.extensions['.css'] = () => {}

require('client/common/globals')
require('server/server')