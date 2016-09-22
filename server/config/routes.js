/* includes functions from controllers */
var auth = require('./auth'),
	users = require('../controllers/users'),
	polls = require('../controllers/polls'),
	mongoose = require('mongoose'),
	User = mongoose.model("User");

module.exports = function(app){

	/* API endpoints for user-based functions */
	app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
	app.post('/api/users', users.createUser);
	app.put('/api/users', users.updateUser);

	/* API endpoints for poll-based functions */
	app.get('/api/polls', polls.getPolls);
	app.get('/api/polls/:id', polls.getPollById);
	app.post('/api/newpoll/', polls.newPoll);
	app.post('/api/vote/', polls.newVote);
	app.post('/api/deletepoll/', polls.deletePoll);
	app.post('/api/addNewOptions/', polls.addNewOptions);

	/* allows angular to handle the routing */
	app.get('/partials/*', function(req, res){
		res.render('../../public/app/' + req.params[0]);
	});

	/* login & logout functions */
	app.post('/login', auth.authenticate);
	app.post('/logout', function(req, res){
		req.logout();
		res.end();
	});

	/* dead API route handler */
	app.all('/api/*', function(req, res){
		res.send(404);
	})

	/* takes user info from passport */
	app.get('*', function(req, res){
		res.render('index', {
			bootstrappedUser: req.user
		});
	});

}