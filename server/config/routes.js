var articles = require('../controllers/articleController'),
	cards = require('../controllers/cardController'),
	mongoose = require('mongoose'),
	cardModel = mongoose.model("Cards"),
	articleModel = mongoose.model("Articles");

module.exports = function(app){

	app.get('/api/articles', articles.getArticles);
	
	app.get('/api/cards', cards.getCards);

	app.get('/partials/*', function(req, res){
		res.render('../../public/app/' + req.params[0]);
	});

	app.all('/api/*', function(req, res){
		res.send(404);
	})

	app.get('*', function(req, res){
		res.render('index', {
			bootstrappedUser: req.user
		});
	});
}