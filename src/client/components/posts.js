const Spinner = require('client/components/spinner')


module.exports = class Posts extends React.Component {
	static propTypes = {
		isLoading: React.PropTypes.bool,
		items: React.PropTypes.array.isRequired
	}

	render() {
		const {isLoading, items} = this.props

		return (
			<div>
				{isLoading
					? <Spinner />

					: items.map((post) =>
						<dl key={post.id}>
							<dt>{post.title}</dt>
							<dd>{post.body}</dd>
						</dl>
					)
				}
			</div>
		)
	}
}