const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    bio: { type: String },
    skills: { type: Array },
    date: { type: Date, default: Date.now },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
    ],
    email:{type:String},
    password:{type:String},


});

const User = mongoose.model("User", UserSchema);

module.exports = User;