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
          'dist/css/fonts.css': 'src/scss/fonts.scss',
          'dist/css/application.css': 'src/scss/application.scss',
          'dist/css/reset.css': 'src/scss/reset.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['src/scss/**/*.scss', 'src/html/**/*', 'src/files/**/*', 'src/js/**/*'],
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
          { expand: true, flatten: true, src: 'src/robots.txt', dest: 'dist/' },
          { expand: true, cwd: 'src/files/', src: '**', dest: 'dist/files/' },
          { expand: true, cwd: 'src/js/', src: '**', dest: 'dist/js/' },
          { expand: true, cwd: 'bower_components/font-awesome/fonts/', src: '**', dest: 'dist/assets/fonts/' },

          { expand: true, cwd: 'bower_components/oswald-googlefont/', src: '*.ttf', dest: 'dist/assets/fonts/' },
          { expand: true, cwd: 'bower_components/source-sans-pro/fonts/source-sans-pro/', src: '*', dest: 'dist/assets/fonts/' },
          { expand: true, cwd: 'bower_components/lato/font/', src: '**', dest: 'dist/assets/fonts/' },

          { expand: true, flatten: true, src: 'bower_components/jquery/dist/jquery.min.js', dest: 'dist/assets/js/' }
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
