var mongoose = require('mongoose');

module.exports = {
     schema: mongoose.Schema({
        category: String,
        site: String,
        votes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Vote'}]
    }),
    model: false
};

module.exports.model = mongoose.model('Category', module.exports.schema);