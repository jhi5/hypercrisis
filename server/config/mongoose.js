/* mongoose & data model includes */
var mongoose = require('mongoose'),
	userModel = require('../models/User'),
	cardModel = require('../models/Card'),
	deckModel = require('../models/Deck'),
	articleModel = require('../models/Article');

/* creates the mongo instance & connects */
module.exports = function(config){
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'mongoose connection error...'));
	db.once('open', function callback(){
		console.log('mongoose connection secured! db opening...')
	});
	userModel.createDefaultUsers();
}