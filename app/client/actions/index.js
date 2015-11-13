const Promise = require('bluebird');
const request = Promise.promisifyAll(require('superagent'));


export const error = require('app/client/actions/error');
export const page = require('app/client/actions/page');
export const user = require('app/client/actions/user');