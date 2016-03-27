const PropTypes = {
	actions: React.PropTypes.objectOf(React.PropTypes.objectOf(React.PropTypes.func)),
	elements: React.PropTypes.arrayOf(React.PropTypes.element),
	tree: React.PropTypes.instanceOf(Baobab)
}

const ContextTypes = {
	actions: PropTypes.actions.isRequired,
	tree: PropTypes.tree.isRequired
}

module.exports = {
	PropTypes,
	ContextTypes
}