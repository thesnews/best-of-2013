module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'routes/**/*.js', 'test/**/*.js']
    },
    watch: {
        less: {
            files: ["public/stylesheets/src/**/*.less"],
            tasks: 'lessc'
        }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {
        exports: true
      }
    },

    less: {
      development: {
        files: {
          "public/stylesheets/master-dist.css": "public/stylesheets/src/master.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', 'lint test');
  grunt.registerTask('release', 'lint test less');
  grunt.registerTask('lessc', 'less');

};