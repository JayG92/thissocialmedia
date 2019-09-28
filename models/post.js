var mongoose= require("mongoose");

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
    postPic: {type:String},
    picTitle:{type:String}

});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
