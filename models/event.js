var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var EventSchema = new Schema({
    eventTitle: String,
    eventBody: String,
    date: String,
    time: String,
});

var Event = mongoose.model("Event", EventSchema);

module.exports = Event;
