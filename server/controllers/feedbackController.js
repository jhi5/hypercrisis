var feedbackModel = require('mongoose').model('Feedback');

exports.newFeedback = function(req, res){
	console.log(req.body);
	var feedbackData = req.body;
	feedbackModel.create(feedbackData, function(err, data){
		if(err){
			err = new Error("no luck");
			console.log(err.toString());
			res.status(400);
			return res.send({reason:err.toString()});
		}
		res.send(feedbackData);
	})
};

