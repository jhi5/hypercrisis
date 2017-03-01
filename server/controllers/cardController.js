var cardModel = require('mongoose').model('Cards');

exports.getCards = function(req, res){
	cardModel.find({}).exec(function(err, cards){
		console.log(cards);
		res.send(cards);
	});
};

