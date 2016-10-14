var auth = require('./auth'),
	users = require('../controllers/users'),
	articles = require('../controllers/articles'),
	cards = require('../controllers/cards'),
	decks = require('../controllers/decks'),
	mongoose = require('mongoose'),
	User = mongoose.model("User");

module.exports = function(app){

	app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
	app.post('/api/users', users.createUser);
	app.put('/api/users', users.updateUser);

	app.get('/api/articles', articles.getArticles);
	app.get('/api/articles/:id', articles.getArticleById);
	
	app.get('api/cards', cards.getCards);
	app.get('api/cards/:id', cards.getCardById);

	app.get('api/decks', decks.getDecks);
	app.get('api/decks/:id', decks.getDeckById);

	app.get('/partials/*', function(req, res){
		res.render('../../public/app/' + req.params[0]);
	});

	app.post('/login', auth.authenticate);
	app.post('/logout', function(req, res){
		req.logout();
		res.end();
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