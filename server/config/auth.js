/* include passport */
var passport = require('passport');

/* user auth */
exports.authenticate = function(req, res, next){
	req.body.username = req.body.username.toLowerCase();
		var auth = passport.authenticate('local', function (err, user){
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
				res.send({success: true, user:user});
			});
		});
	auth(req, res, next);
}

/* blocks non-verified user from api */
exports.requiresApiLogin = function(req, res, next){
	if(!req.isAuthenticated()){
		res.status(403);
		res.end();
	}else{
		next();
	}
}

/* block users with bad permissions from api */
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
