// HACK: patch createReactRootIndex to enable
// ETag caching for server-side rendering

require('react/lib/ServerReactRootIndex')
	.createReactRootIndex = () => 0;