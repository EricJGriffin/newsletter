var mongoose = require('mongoose');

// Submission Schema
var subSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var SubList = module.exports = mongoose.model('Submission', subSchema);

// Get Submissions List
module.exports.getSubList = function(callback, limit){
	SubList.find(callback).limit(limit);
}

// Add Submission
module.exports.addSubmission = function(submission, callback){
	SubList.create(submission, callback);
}

// Delete Submission
module.exports.removeSubmission = function(id, callback){
	var query = {_id: id};
	SubList.remove(query, callback);
}