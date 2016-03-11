module.exports = {
	getDefaultState() {
		return {
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