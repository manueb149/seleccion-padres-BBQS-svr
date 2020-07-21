const mongoose = require('mongoose');

const VotesSchema = mongoose.Schema({
    candidates: {},
    commissar: {}
});

module.exports = mongoose.model('Votes', VotesSchema);