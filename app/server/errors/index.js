class APIError extends Error {
	constructor(message, status = 400) {
		super(message);
		this.name = 'APIError';
		this.status = status;
		this.message = message;
		this.stack = (new Error()).stack;
	}
}


const handler = (err, req, res, next) => {
	let status = 500;
	let message = 'Internal Server Error';

	if (err instanceof APIError){
		status = err.status;
		message = err.message;
	}

	res.status(status).json({
		error: {
			status,
			message
		}
	});
};


export default {
	APIError,
	handler,
	wrap: (fn) => (...args) => fn(...args).catch(args[2])
};