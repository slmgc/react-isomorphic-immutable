// HACK: fix for server-side css-loader
require.extensions['.css'] = () => {}