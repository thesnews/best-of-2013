var mongoose = require('mongoose')
    category = require('./category');

module.exports = {
     schema: mongoose.Schema({
        date: Date,
        ip: String,
        category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
        vote: String,
        site: String
    }),
    model: false
};

module.exports.model = mongoose.model('Vote', module.exports.schema);