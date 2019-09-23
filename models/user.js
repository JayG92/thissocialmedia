const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    bio: { type: String },
    skills: { type: Array },
    date: { type: Date, default: Date.now },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
    ],
    email:{type:String},
    phonenumber:{type:String},
    birthday:{type:String},
    password:{type:String},
    profilepic:{type:String},
    events:[{
        type:Schema.Types.ObjectId,
        ref:"Event"
    }]


});

const User = mongoose.model("User", UserSchema);

module.exports = User;
