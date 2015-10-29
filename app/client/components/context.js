const React = require('react');


export default class extends React.Component {
	static childContextTypes = {
		initState: React.PropTypes.any
	}

	constructor(props, context) {
		super(props, context);

		try {
			this.state = window.__INIT_STATE__;
		} catch (e) {
			this.state = this.props.initState;
		}
	}

	getChildContext() {
		return {
			initState: this.state
		};
	}

	render() {
		return this.props.children;
	}
}