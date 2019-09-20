var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var PostSchema = new Schema({
    title: String,
    body: String,
    category: String,
    Date: Date,
    Time: Number,
    eventBody:String,
    eventTitle:String


});

var Post = mongoose.model("Note", PostSchema);

module.exports = Post;
