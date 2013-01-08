var categoryList = require('../categories');

module.exports = function(app) {
    // https://gist.github.com/872242
    var randomGenerator = (function(){
        var MAX = 9e15;
        var MIN = 1e15;
        var safegap = 1000;
        var counter = MIN;

        return function(){
        var increment = Math.floor(safegap*Math.random());
        if(counter > (MAX - increment)) counter = MIN;
            counter += increment;
            return counter.toString(36);
        };
    })();

    app.get('/widget.js', function(req, res){

        var tok = req.cookies._token;

        if( !req.cookies._token ) {
            tok = randomGenerator();
            res.cookie('_token', tok, {maxAge:86400000});
        }

        res.render(
            'widget/index',
            {
                token:tok,
                categories: categoryList
            }
        );
    });
}