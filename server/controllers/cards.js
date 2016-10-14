var Card = require('mongoose').model('Cards');

exports.getCards = function(req, res){
	Card.find({}).exec(function(err, cards){
		res.send(cards);
	});
};

exports.getCardById = function(req, res){
	Card.findOne({_id: req.params.id}).exec(function(err, poll){
		res.send(poll);
	});
};
