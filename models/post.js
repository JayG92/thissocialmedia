var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var PostSchema = new Schema({
    title: String,
    body: String,
    likes: Number,
    projectLink: String,
    category: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:"User",
    }

});

var Post = mongoose.model("Post", PostSchema, "posts");

module.exports = Post;
