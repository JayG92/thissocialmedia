const express = require("express");
const path = require("path");
require("dotenv").config();
const logger = require("morgan");

const app = express();

const PORT = process.env.PORT || 3001;

require('./services/passport');

//Mongoose Connection
const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/thissocialmedia");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kevin:<3asy2remember>@cluster0.e5xmr.mongodb.net/<thissocialmedia>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// Serve up static assets (usually on heroku)

app.use(express.static("client/build"));
// Add routes, both API and view
app.use(require("./routes/api"));

app.get("*", function(req, res){
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
