module.exports = function() {
    switch( process.env.NODE_ENV ) {
        case 'production':
            return {
                'crypt':        ''
                'mongo': {
                    'db':       '',
                    'server':   ''
                }
            };

        case 'development' :
        default :
            return {
                'crypt':        ''
                'mongo': {
                    'db':       '',
                    'server':   ''
                }
            };
    }
};