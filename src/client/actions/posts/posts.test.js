const {jsdom} = require('jsdom')
const should = require('should')
const actions = require('client/actions')
const {getDefaultState} = require('client/common/state')


describe('actions.posts.get', function() {
	this.timeout(10000)

	let app, promise
	const {posts} = getDefaultState()
	const tree = new Baobab({posts})
	const loadingCursor = tree.select('posts', 'isLoading')
	const itemsCursor = tree.select('posts', 'items')

	before(() => {
		app = require('server/server')()
		promise = actions.posts.get(tree)
	})

	it('sets a loading state to true', () => {
		loadingCursor.get().should.be.ok()
	})

	it('returns a list of posts', async () => {
		await promise
		itemsCursor.get().should.not.be.empty()
	})

	it('sets a loading state to false', () => {
		loadingCursor.get().should.not.be.ok()
	})

	after((done) => {
		try {
			app.close(done)
		} catch (e) {
			done()
		}
	})
})