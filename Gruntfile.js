'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		less: {
			app: {
				options: {
					paths: [
						'css',
						'bower_components'
					]
				},
				files: {
					'dist/app.css': 'css/app.less'
				}
			}
		},
		autoprefixer: {
			app: {
				src: 'dist/app.css',
				dest: 'dist/app.css'
			}
		},
		cssmin: {
			app: {
				files: {
					'dist/app.css': ['dist/app.css']
				}
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			app: ['js/*.js']
		},
		browserify: {
			app: {
				files: {
					'dist/app.js': [
						'js/index.js'
					]
				}
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			app: {
				files: {
					'dist/app.js': ['dist/app.js']
				}
			}
		},
		connect: {
			app: {
				options: {
					port: 9001,
					base: '.'
				}
			}
		},
		watch: {
			app: {
				files: [
					'css/app.less',
					'js/**/*.js'
				],
				tasks: ['default']
			}
		}
	});

	grunt.registerTask('default', [
		'jshint:app',
		'browserify:app',
		'less:app',
		'autoprefixer:app',
		'cssmin:app',
		'uglify:app'
	]);

	grunt.registerTask('serve', [
		'default',
		'connect:app',
		'watch:app'
	]);
};
