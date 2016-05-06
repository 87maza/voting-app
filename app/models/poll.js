var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pollSchema = new Schema({
    pollId: String,
    created_at: Date,
    question:  String,
    author: String, //nest object with a username query,
    addField: String,
    options: Array,
    pollResults: Array,
    pollVoters: Array
});

module.exports = mongoose.model('Poll', pollSchema);

//get poll data for all polls and indiv poll id's
//post new poll data
//put modify options of the survey by adding new fields/choices
//delete poll data if user created the poll
//1 user can have many polls

//route polls with /:id params

