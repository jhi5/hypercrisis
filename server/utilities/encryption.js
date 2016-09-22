var crypto = require('crypto');

/* set up the salt length and type of encryption */
exports.createSalt = function (){
	return crypto.randomBytes(128).toString('base64');
}

/* encrypts the password */
exports.hashPwd = function (salt, pwd){
	var hmac = crypto.createHmac('sha1', salt);
	hmac.setEncoding('hex');
	hmac.write(pwd);
	hmac.end();
	return hmac.read();
}