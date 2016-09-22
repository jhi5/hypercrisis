/* Include passport for encryption */
var passport = require('passport');

/* Exports a user authentication function to the api route based
on mongoDB value comparisons*/
exports.authenticate = function(req, res, next){
	req.body.username = req.body.username.toLowerCase();
		var auth = passport.authenticate('local', function(err, user){
			if(err){
				return next(err);
			}
			if(!user){
				res.send({success:false});
			}
			req.logIn(user, function(err){
				console.log(user + ' found by req.login');
				if(err){
					return next(err);
				}
				res.send({success: true, user: user});
			});
		});
	auth(req, res, next);
}

/* Prevents unverified users from accessing the api */
exports.requiresApiLogin = function(req, res, next){
		if(!req.isAuthenticated()){
			res.status(403);
			res.end();
		}else{
			next();
		}
}

/* Prevents users with improper permissions from accessing the api*/
exports.requiresRole = function(role){
	return function(req, res, next){
		if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1){
			res.status(403);
			res.end();
		}else{
			next();
		}
	}
}