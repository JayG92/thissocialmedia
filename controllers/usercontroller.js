const db = require("../models");
const { tokenizer } = require("../routes/auth");

module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById()
      .then(res.json({ token: tokenizer(req.user), email: req.user.email }))
      .catch(err => res.status(422).json(err));

  },
  findOne: function (req, res) {
    db.User
      .findOne({ email: req.params.id })
      .then(dbUser => {
        res.json({
          bio: dbUser.bio,
          skills: dbUser.skills,
          profilepic:dbUser.profilepic
        })
      })
      .catch(err => res.status(422).json(err));

  },
  signIn: function (req, res) {
    console.log("sign in route hit");
    res.json({ token: tokenizer(req.user), email: req.user.email });
  },

  signUp: function (req, res) {
    console.log("find One hit");

    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).send({ error: "You must provide an email and password" });
    }

    db.User
      .findOne({ email })
      .then(dbuser => {
        // if the user exists return an error
        if (dbuser) {
          return res.status(422).send({ error: "Email already in use" });
        }
        //create new user object
        const user = new db.User({ email, password });
        // save the user
        user.save().then(user => {
          // respond with the success if the user existed
          res.json({ token: tokenizer(user), user: { email: user.email } });
        });
      })
      .catch(err => {
        return next(err);
      });


  },


  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log(req.body);
    db.User
      .findOneAndUpdate({ email: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
