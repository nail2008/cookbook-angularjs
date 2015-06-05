module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Minify CSS files
    cssmin: {
      minify: {
        src: 'mobile-select-link.css',
        dest: 'mobile-select-link.min.css'
      }
    },

    // Compile from Sass to CSS
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files 
          'mobile-select-link.css': 'mobile-select-link.scss'
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('css', ['sass', 'cssmin']);


};