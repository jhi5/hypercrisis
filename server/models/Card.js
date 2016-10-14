var mongoose = require('mongoose'),
	cardCollection = require('../collections/cardCollection');

var cardSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required!'},
	character: {type: String, required: '{PATH} is required!'},
	type: {type: String, required: '{PATH} is required!'},
	utilityValues: {type: Array, required: '{PATH} is required!'},
	text: {type: String, required: '{PATH} is required!'},
	flavor: {type: Array, required: '{PATH} is required!'},
	illustrations: {type: Array, required: '{PATH} is required!'},
	rating: {type: Array, required: '{PATH} is required!'},
	tags: {type: Array, required: '{PATH} is required!'},
	comments: {type: Array, required: '{PATH} is required!'}
});

var Card = mongoose.model("Cards", cardSchema);

function createNewCard(data) {
	Card.find({}).exec(function(err, collection){
		if(collection.length === 0){
			Card.create({name: data.name, character: data.character, type: data.type, utilityValues: data.utilityValues, text: data.text, flavor: data.flavor, illustrations: data.illustrations, rating: data.rating, tags: data.tags, comments: data.comments});
		}
	});
}

function createDefaultCards(array) {
	for(i = 0; i < array.length; i++){
		createNewCard(array[i]);
	}
}

createDefaultCards(cardCollection.defaultCards);