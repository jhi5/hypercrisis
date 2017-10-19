/* including paths for mongo */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/hypercrisis',
		rootPath: rootPath,
		port: process.env.PORT || 3000
	},
	production: {
		db: 'mongodb://jhi5:1337SNKj@ds035826.mlab.com:35826/hypercrisis',
		rootPath: rootPath,
		port: process.env.PORT || 3000
	}
}