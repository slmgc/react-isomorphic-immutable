const {jsdom} = require('jsdom')
const {renderToStaticMarkup} = require('react-dom/server')
const should = require('should')
const Page = require('client/components/page')


describe('Page component', () => {
	const content = 'page content'

	const page = {
		description: 'page description',
		lang: 'en',
		title: 'page title'
	}

	const initState = {
		page,
		user: null
	}

	const html = `<!doctype html>${renderToStaticMarkup(
		<Page initState={initState}
			{...page}>
				<div>{content}</div>
		</Page>
	)}`

	const document = jsdom(html)
	const {defaultView: window} = document

	it('is rendered', () => {
		document.querySelector('#content')
			.textContent.should.be.equal(content)
	})

	it('has a valid description', () => {
		document.querySelector('meta[name=description]')
			.content.should.be.equal(page.description)
	})

	it('has a valid initial state', () => {
		should(window.__INIT_STATE__).be.deepEqual(initState)
	})

	it('has a valid language', () => {
		document.documentElement.lang.should.be.equal(page.lang)
	})

	it('has a valid title', () => {
		document.title.should.be.equal(page.title)
	})
})