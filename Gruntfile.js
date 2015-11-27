module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
      sass: {
          options: {
              sourcemap: "auto",
              trace: true,
              style: "expanded",
              lineNumbers: false
          },
          dist: {
              files: {
                  'dist/css/application.css': 'scss/application.scss',
                  'dist/css/reset.css': 'scss/reset.scss'
              }
          }
      },
      watch: {
        css: {
          files: ['scss/**/*.scss', 'views/**/*', 'images/**/*'],
          tasks: ['sass', 'includes', 'copy']
        }
      },
      includes: {
        files: {
          src: ['views/*.html'],
          dest: 'dist',
          flatten: true,
          cwd: '.',
          options: {
            silent: true
          }
        }
      },
      copy: {
        main: {
          files: [
            { expand: true, src: ['images/**/*'], dest: 'dist/' },
          ]
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-includes');
  grunt.registerTask('default', ['watch']);
}
