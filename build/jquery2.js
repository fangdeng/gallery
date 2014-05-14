/**
 * build jquery2
 * */
 
module.exports = function( grunt ){
    
    return {
        options: {
            separator: '\n\n'
        },
        files: [{
            src: [
                'src/jquery2/prepose.js',
                'src/jquery2/jquery-2.1.1.js',
                'src/jquery2/af.touchEvents.js',
                'src/jquery2/package.js'
            ],
            dest: 'src/jquery2/jquery-latest.js'
        }]
    };
};
