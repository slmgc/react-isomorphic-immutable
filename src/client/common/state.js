module.exports = {
	getDefaultState() {
		return {
			error: {},
			page: {
				description: '',
				lang: 'en',
				title: ''
			},
			posts: {
				isLoading: false,
				items: []
			},
			user: {}
		}
	}
}