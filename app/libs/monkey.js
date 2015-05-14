// HACK: patching createReactRootIndex method
// to enable etag caching for server-side rendering

require('react/lib/ServerReactRootIndex')
	.createReactRootIndex = () => 0;