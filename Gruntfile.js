/**
 * Created by User on 10.05.2017.
 */

module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        /*autoprefixer: {
            options: {
                // We need to `freeze` browsers versions for testing purposes.
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'opera 12', 'ff 15', 'chrome 25']
            },

            single_file: {
                src: 'css/style.css',
                dest: 'css/a-style.css'
            }*/

        /*concat: {

            dist: {

                src: [

                    'js/jquery-3.1.1.min.js',
                    'js/jquery-3.1.1.min.js',
                    'js/jquery.tmpl.min.js',
                    'js/jquery.easing.1.3.js',
                    'js/jquery.elastislide.js',
                    'js/gallery.js',
                    'js/countdown.js',
                    'js/jquery.scrollTo.min.js',
                    'js/waypoints.min.js',
                    ' js/animate-css.js',
                    'js/common.js'
                ],

                dest :  'js/production.js'

            }


        },//concat*/

        /*uglify:{

            my_target : {

                files: {

                    'js/production.min.js' : ['js/production.js']

                }

            }

        }*/

        cssmin: {

            with_banner: {
                options: {
                    banner: '/* My minified CSS */'
                },

                files: {
                    'style/style.min.css': [
                        'style/animate.css',
                        'style/style.css',
                        'style/flexboxgrid.css',
                        'style/fonts.css',
                        'style/normilize.css'
                    ]
                }
            }
        }


    });

    /*grunt.loadNpmTasks('grunt-contrib-concat');*/
   /* grunt.loadNpmTasks('grunt-contrib-uglify');*/
   /* grunt.loadNpmTasks('grunt-contrib-cssmin');*/
    /*grunt.loadNpmTasks('grunt-autoprefixer');*/



   /* grunt.registerTask('default', ['autoprefixer']);*/
    /*grunt.registerTask('default', ['concat']);*/
   /* grunt.registerTask('default', ['uglify']);*/
   /* grunt.registerTask('default', ['cssmin']);*/

};