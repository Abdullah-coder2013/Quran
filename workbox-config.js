module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,xml,ico,woff2,ttf,woff,html,svg,jpg,json,py,txt,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};