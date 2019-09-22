const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: INT, required: true },
    birthday: { type: Date, required: true },
    bio: { type: String },
    skills: { type: Array },
    date: { type: Date, default: Date.now },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
        
    }
    ],
    isFollowed: false


});

const User = mongoose.model("User", UserSchema);

module.exports = User;
