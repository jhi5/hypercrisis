var Poll = require('mongoose').model("Polling");

/* get all polls */
exports.getPolls = function(req, res){
	Poll.find({}).exec(function(err, collection){
		res.send(collection);
	})
};

/* grabs poll by id from API endpoint */
exports.getPollById = function(req, res){
	console.log(req.params.id);
	Poll.findOne({_id:req.params.id}).exec(function(err, poll){
		res.send(poll);
	})
};

/* creates a new poll from API enpoint & checks for duplicates */
exports.newPoll = function(req, res){
	console.log(req.body);
	var pollData = req.body;
	Poll.create(pollData, function(err, data){
		if(err){
			if(err.toString().indexOf('E11000') > -1){
				err = new Error("Duplicate Username");
			}
			console.log(err.toString());
			res.status(400);
			return res.send({reason:err.toString()});
		}
		res.send(pollData);
	})
};

/* increases the vote increment in existing poll data */
exports.newVote = function(req, res){
	console.log(req.body.pollId);
	Poll.findOne({_id:req.body.pollId}).exec(function(err, poll){
		poll.options[req.body.vote - 1].votes++;
		poll.markModified("options");
		poll.save();
		console.log(poll);
		res.send(poll);
	})
};

/* removes poll from db */
exports.deletePoll = function(req, res){
	console.log(req.body);
	Poll.remove({_id: req.body.pollId}).exec(function(err, poll){
		if(err){
			console.log(err);
		}else{
			res.status(200);
			return res.send(poll);
		}
	});
};

/* adds an additional set of options to previously existing poll */
exports.addNewOptions = function(req, res){
	Poll.findOne({_id:req.body.pollId}).exec(function(err, poll){
		poll.options.push({"choice": req.body.newOption, "votes": 0, "id": poll.options.length + 1});
		poll.markModified("options");
		poll.save();
		console.log(poll);
		res.send(poll);
	})
}