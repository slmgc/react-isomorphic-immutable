const {jsdom} = require('jsdom')
const document = jsdom('<!doctype html>')
const {defaultView: window} = document


for (let key in window) {
	if (!window.hasOwnProperty(key)) continue
	if (key in global) continue
	global[key] = window[key]
}

Object.assign(global, {document, window})