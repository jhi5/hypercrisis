var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
	character: {type: String, required: '{PATH} is required!'},
	gamesWon: {type: Number, required: '{PATH} is required!'},
	gamesPlayed: {type: Number, required: '{PATH} is required!'},
	crossovers: {type: Array, required: '{PATH} is required!'},
	feats: {type: Array, required: '{PATH} is required!'},
	deck: {type: Array, required: '{PATH} is required!'},
	playerComment: {type: String, required: '{PATH} is required!'}
});

var Feedback = mongoose.model("Feedback", feedbackSchema);
