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
          'dist/css/application.css': 'src/scss/application.scss',
          'dist/css/reset.css': 'src/scss/reset.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['src/scss/**/*.scss', 'src/html/**/*', 'src/files/**/*'],
        tasks: ['sass', 'includes', 'copy']
      }
    },
    includes: {
      files: {
        src: ['src/html/*.html'],
        dest: 'dist/',
        flatten: true,
        cwd: '.',
        options: {
          silent: true,
          includePath: 'src/html/partials',
          filenamePrefix: '_',
          filenameSuffix: '.html',
          includeRegex: /^(\s*)\@include\s+"(\S+)"\s*$/
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: false, src: ['src/files/**/*'], dest: 'dist/' }
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
