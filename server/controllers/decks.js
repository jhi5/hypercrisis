var Deck = require('mongoose').model('Decks');

exports.getDecks = function(req, res){
	Deck.find({}).exec(function(err, decks){
		res.send(decks);
	});
};

exports.getDeckById = function(req, res){
	Deck.findOne({_id:req.params.id}).exec(function(err, deck){
		res.send(deck);
	});
};