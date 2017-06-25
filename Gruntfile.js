/**
 * Created by User on 10.05.2017.
 */

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            options: {
                // We need to `freeze` browsers versions for testing purposes.
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'opera 12', 'ff 15', 'chrome 25']
            },

            single_file: {
                src: 'css/style.css',
                dest: 'css/a-style.css'
            }
        },

        cssmin: {

            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'css/style.min.css': [
                        'bower_components/owl-carousel/dist/assets/owl.carousel.min.css',
                        'bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'bower_components/font-awesome/css/font-awesome.min.css',
                        'bower_components/animate.css/animate.min.css',
                        'css/a-style.css'
                    ]
                }
            }
        },

        concat: {

            dist: {

                src: [

                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/owl-carousel/dist/owl.carousel.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'js/countdown.js',
                    'js/waypoints.min.js',
                    'js/animate-css.js',
                    'js/maskedinput.js',
                    'js/common.js'
                ],

                dest :  'js/production.js'

            }


        },//concat

        uglify:{

            my_target : {

                files: {

                    'js/production.min.js' : ['js/production.js']

                }

            }

        }




    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');



   /* grunt.registerTask('default', ['autoprefixer']);*/
    grunt.registerTask('default', ['concat','uglify','autoprefixer','cssmin']);
   /* grunt.registerTask('default', ['uglify']);*/
    /*grunt.registerTask('default', ['cssmin']);*/

};