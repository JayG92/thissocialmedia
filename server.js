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
