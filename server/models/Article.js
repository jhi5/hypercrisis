var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title: {type: String, required: '{PATH} is required!'},
	author: {type: String, required: '{PATH} is required!'},
	date: {type: String, required: '{PATH} is required!'},
	text: {type: String, required: '{PATH} is required!'}
});

var Article = mongoose.model("Articles", articleSchema);