var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pollSchema = new Schema({
    pollId: String,
    created_at: Date,
    question:  String,
    author: String,
    body: String,
    addField: String,
    options: Array,
    pollResults: Array,
    pollVoters: Array
});

module.exports = mongoose.model('Poll', pollSchema);