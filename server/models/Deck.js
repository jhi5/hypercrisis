var mongoose = require('mongoose');

var deckSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required!'},
	character: {type: String, required: '{PATH} is required!'},
	creator: {type: String, required: '{PATH} is required!'},
	feats: {type: Array, required: '{PATH} is required!'},
	decklist: {type: Array, required: '{PATH} is required!'},
});

var Deck = mongoose.model("Decks", deckSchema);