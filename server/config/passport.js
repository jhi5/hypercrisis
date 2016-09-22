/* Mongoose & Passport includes*/
var mongoose = require('mongoose'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	User = mongoose.model('User');

module.exports = function(){

	/* begin using passport*/
	passport.use(new LocalStrategy(
		function(username, password, done){
			User.findOne({username:username}).exec(function(err, user){
				if(user && user.authenticate(password)){
					console.log(user + 'found by LocalStrategy');
					return done(null, user);
				}else{				
					return done(null, false);
				}
			})
		}
	));

	/* sets up passport to handle req.body */
	passport.serializeUser(function(user, done){
		if(user){
			done(null, user._id);
		}
	});
	passport.deserializeUser(function(id, done){
		User.findOne({_id:id}).exec(function(err, user){
			if(user){
				return done(null, user);
			}else{
				return done(null, false);
			}
		})
	});
}