const mongoose = require('mongoose');

const VotesSchema = mongoose.Schema({
    family: {},
});

module.exports = mongoose.model('Votes', VotesSchema);