/* mongoose & data model includes */
var mongoose = require('mongoose'),
	cardModel = require('../models/cardModel'),
	articleModel = require('../models/articleModel'),
	feedbackModel = require('../models/feedbackModel');

/* creates the mongo instance & connects */
module.exports = function(config){
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'mongoose connection error...'));
	db.once('open', function callback(){
		console.log('mongoose connection secured! db opening...')
	});
}