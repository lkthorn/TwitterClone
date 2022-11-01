const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
        type: String,
        trim: true,
    },

    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    pinned: Boolean, 
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    retweetUsers: [{                //users that have retweeted in an array
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    retweetData: {                  //id of the retweeted post
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    replyTo: {               
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },   
    pinned: Boolean              

}, { timestamps: true });

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;
