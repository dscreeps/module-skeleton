'use strict';

module.exports = grunt => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: "'use strict';\n\n",
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js',
      },
      live: {
        src: ['src/**/*.js'],
        dest: '../<%= pkg.name %>.js',
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['concat']);
};
