var Article = require('mongoose').model("Articles");

exports.getArticles = function(req, res){
	Article.find({}).exec(function(err, collection){
		res.send(collection);
	});
};

exports.getArticleById = function(req, res){
	Article.findOne({_id:req.params.id}).exec(function(err, article){
		res.send(article);
	});
};
