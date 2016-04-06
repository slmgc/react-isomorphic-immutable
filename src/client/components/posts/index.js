require('./posts.css')
const Spinner = require('client/components/spinner')


module.exports = class Posts extends React.Component {
	static propTypes = {
		isLoading: React.PropTypes.bool,
		items: React.PropTypes.array.isRequired
	}

	render() {
		const {isLoading, items} = this.props

		return (
			<div className="posts">
				{isLoading
					? <Spinner />

					: items.map((post) =>
						<div className="posts__post media" key={post.id}>
							<div className="media-body">
								<h5 className="media-heading">{post.title}</h5>
								{post.body}
							</div>
						</div>
					)
				}
			</div>
		)
	}
}