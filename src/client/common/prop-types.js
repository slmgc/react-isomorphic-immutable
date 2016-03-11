module.exports = {
	actions: React.PropTypes.objectOf(React.PropTypes.objectOf(React.PropTypes.func)),
	elements: React.PropTypes.arrayOf(React.PropTypes.element),
	tree: React.PropTypes.instanceOf(Baobab)
}