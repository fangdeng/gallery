/**
 * the Gruntfile for fangdeng gallery
 * @author Edgar
 * @date 140514
 * */

module.exports = function( grunt ){
    
    var buildJquery2 = require('./build/jquery2');
    
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        concat: {
            jquery2: buildJquery2( grunt )
        }
    });

    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask( 'default', 'fangdeng gallery build defalut task.', ['concat'] );

};
