const db = require("../models");


module.exports = {

findAll: function(req, res) {
    db.Post
      .find(req.query)
      .sort({ created_at: -1 })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },  create: function(req, res) {
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    console.log(req.body);
    db.Post
      .findOneAndUpdate({ post: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
}