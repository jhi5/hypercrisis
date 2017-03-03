var cardModel = require('mongoose').model('Cards');

exports.getCards = function(req, res){
	cardModel.find({}).exec(function(err, cards){
		res.send(cards);
	});
};

