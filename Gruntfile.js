module.exports = function(grunt) {
    var LIVERELOAD_PORT = 35729;

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            dist: {
                src: 'assets/js/<%= pkg.name %>.js',
                dest: 'assets/js/scripts<%= grunt.template.today("yyyy-mm-dd") %>.js'
            }
        },

// Project configuration.

        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */',
        meta: {
            version: '0.1.0'
        },


        //min files
        uglify: {
            build: {
                src: ['www/js/index.js'], //input
                dest: 'www/js/build/index.min.js' //output
            }
        },

        //sass > css
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: true
                },
                files: {
                    "www/css/stylesDevelopment.css": "www/sass/styles.scss"
                }
            },
            production: {
                options: {
                    style:'compressed',
                    compass: true
                },
                files: {   //only actually need this bit inside less everything else is if you were creating a different environment for development and production
                    "www/css/build/styles.css": "www/sass/styles.scss"
                }
            }
        },


        // to run grunt connect
        connect: {
            server: {
                options: {
                    port: 9000,
                    base: './',
                    keepalive: true,
                    open: {
                        target: 'http://0.0.0.0:9000/'
                    }
                }
            }
        },
        // jshint.
        //concat: {
        //    dist: {
        //        src: ['src/foo.js', 'src/bar.js'],
        //        dest: 'dist/output.js'
        //    }
        //},
        jshint: {
            beforeconcat: ['www/js/index.js'] //it appears there are a few ways to write this but I think this one works fine.
        },
        //watch
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['index.html']
            },
            css: {
                files: 'www/sass/*.scss',
                tasks: ['sass'],
                livereload: true

            },
            js: {
                   files: ['www/js/*.js'],
               tasks: ['jshint', 'concat', 'uglify'],
                options: {
                  spawn: false
                }
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['uglify', "jshint", 'sass']);

};