var articles = require('../controllers/articleController'),
	cards = require('../controllers/cardController'),
	feedback = require('../controllers/feedbackController'),
	mongoose = require('mongoose'),
	cardModel = mongoose.model("Cards"),
	articleModel = mongoose.model("Articles"),
	feedbackModel = mongoose.model("Feedback");

module.exports = function(app){

	app.get('/api/articles', articles.getArticles);
	
	app.get('/api/cards', cards.getCards);

	app.post('/api/newfeedback', feedback.newFeedback);

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