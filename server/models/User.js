var mongoose = require('mongoose'),
	encrypt = require('../utilities/encryption');

/* sets up all db fields for the user */
var userSchema = mongoose.Schema({
	firstName: {type: String, required: '(PATH) is required!'},
	lastName: {type: String, required: '(PATH) is required!'},
	username: {type: String, required: '(PATH) is required!', unique: true},
	email: {type: String, required: '(PATH) is required', unique: true},
	salt: {type: String, required: '(PATH) is required!'},
	hashed_pwd: {type: String, required: '(PATH) is required!'},
	roles: [String]
});

/* handles encryption and role fetching */
userSchema.methods = {
	authenticate: function(passToMatch) {
		return encrypt.hashPwd(this.salt, passToMatch) === this.hashed_pwd;
	},
	hasRole: function(role){
		return this.roles.indexOf(role) > -1;
	}
}
 
/* configures the model itself and attached to db instance */
var User = mongoose.model('User', userSchema);


function createDefaultUsers() {
	User.find({}).exec(function(err, collection) {
		if (collection.length === 0) {
			var salt, hash;
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'Test');
			User.create({
				firstName: "Test",
				lastName: "Testy",
				username: "BigDog",
				email: "bigdog@bigdogs.com",
				salt: salt,
				hashed_pwd: hash,
				roles: ['admin']
			});
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'Billy');
			User.create({
				firstName: "Billy",
				lastName: "Kidman",
				username: "Checkers",
				email: "sadguy@billy.com",
				salt: salt,
				hashed_pwd: hash,
				roles: ['']
			});
			salt = encrypt.createSalt();
			hash = encrypt.hashPwd(salt, 'Blue');
			User.create({
				firstName: "Da Blue",
				lastName: "Guy",
				username: "Snackman",
				email: "bluemyself@blueguy.com",
				salt: salt,
				hashed_pwd: hash,
				roles: ['admin']
			});
		}
	});
}

/* sets your config to the exports objects for modularity */
exports.createDefaultUsers = createDefaultUsers;