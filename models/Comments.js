var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	body: String,
	author: String,
	votes: {type: Number, default: 0},
	posts: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

CommentSchema.methods.upvote = function(cb){
	this.votes += 1;
	this.save(cb);
};

mongoose.model('Comment', CommentSchema);
