const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const UserSchema = new Schema({
  name: { type: String },
  bio: { type: String },
  skills: { type: Array },
  repoLink: { type: String },
  likes: { type: Number },
  Following: { type: Array },
  Followers: { type: Array },
  date: { type: Date, default: Date.now },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"

  }
  ],
  email: { type: String, unique: true },
  phonenumber: { type: String },
  projectLink: { type: String },
  birthday: { type: String },
  password: { type: String },
  profilepic: { type: String },
  events: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  }],
  loggedIn: { type: Boolean, default: false }


});



// On save hook, encrypt password
UserSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });
});
// create a method to check a users password
UserSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};










// userSchema.methods = {
// 	checkPassword: function (inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.password)
// 	},
// 	hashPassword: plainTextPassword => {
// 		return bcrypt.hashSync(plainTextPassword, 10)
// 	}
// }

// userSchema.pre('save', function (next) {
// 	if (!this.password) {
// 		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
// 		next()
// 	} else {
// 		console.log('models/user.js hashPassword in pre save');

// 		this.password = this.hashPassword(this.password)
// 		next()
// 	}
// })


const User = mongoose.model("User", UserSchema, "users");

module.exports = User;