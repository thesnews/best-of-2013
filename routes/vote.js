var mongoose = require('mongoose'),
    vote = require('../models/vote'),
    category = require('../models/category');

module.exports = function(app) {
    app.get('/vote', function(req, res) {
        var cat = false;
//        var cat = new category.model;
//        cat.category = 'A test category';
//        cat.save();

//        var test = new vote.model;
//        test.vote = 'Foo';
//        test.ip = '00.00.00.00';
//        test.category = cat._id;
//        test.save();

//        cat.votes.push(test);
//        cat.save();

        category.model.find({category: 'A test category'}).populate('votes').exec(function(err, data) {
            var cat = data[0];
            console.log(cat);
        });




/*        vote.model.findById("50ec67303122b4de6f000002").populate('category').exec(function(err, data) {
            console.log(data.vote);
            console.log(data.category.category);
        });
*/

        res.jsonp({
            'error': false
        });
    });
}