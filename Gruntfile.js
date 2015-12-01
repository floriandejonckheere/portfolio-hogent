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
        files: ['scss/**/*.scss', 'views/**/*', 'images/**/*', 'files/**/*'],
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
          silent: true,
          includePath: 'views/partials',
          filenamePrefix: '_',
          filenameSuffix: '.html',
          includeRegex: /^(\s*)\@include\s+"(\S+)"\s*$/
        }
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, src: ['images/**/*'], dest: 'dist/' },
          { expand: false, src: ['files/**/*'], dest: 'dist/' }
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
        dest: '/www/'
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
