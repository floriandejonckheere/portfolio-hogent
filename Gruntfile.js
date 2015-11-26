module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      sass: {
          options: {
              sourceMap: true
          },
          dist: {
              files: {
                  'css/application.css': 'scss/application.scss',
                  'css/reset.css': 'scss/reset.scss'
              }
          }
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass', 'watch']);
}
