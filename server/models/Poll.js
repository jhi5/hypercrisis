var mongoose = require('mongoose');

/* sets up all db fields for a poll */
var pollSchema = mongoose.Schema({
	title: {type: String, required:'{PATH} is required!'},
	options: {type: Array, required:'{PATH} is required!'},
	createdBy: {type: String, required: '{PATH} is required!'},
	createdOn: {type: Date, required: '{PATH} is required!'}
});

/* mounts the poll schema to the db */
var Poll = mongoose.model("Polling", pollSchema);

/* adds a new poll */
function addNewPoll(data){
	Poll.find({}).exec(function(err, collection){
		if(collection.length === 0){
			Poll.create({title: data.title, options: data.options, createdBy: data.creator});
		}		
	});
}

/* attach to exports for modularity */
exports.addNewPoll = addNewPoll;