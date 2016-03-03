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
          { expand: true, flatten: true, src: ['src/robots.txt'], dest: 'dist/' },
          { expand: true, flatten: true, src: ['src/files/**/*'], dest: 'dist/files/' },
          { expand: true, flatten: true, src: ['src/js/**/*'], dest: 'dist/js/' },
          { expand: true, flatten: true, src: ['bower_components/font-awesome/fonts/*'], dest: 'dist/assets/fonts/' },
          { expand: true, flatten: true, src: ['bower_components/font-awesome/css/*'], dest: 'dist/assets/css/' },
          { expand: true, flatten: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'dist/assets/js/' }
        ]
      }
    },
    'ftp-deploy': {
      build: {
        auth: {
          host: 'users.hogent.be',
          port: 21,
          authKey: 'production'
        },
        src: 'dist/',
        dest: '/www/eportfolio/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-includes');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('deploy', ['ftp-deploy:build']);
}
