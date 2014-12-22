module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		'compile-handlebars': {
			dist: {
				globals: ['metadata.json'],
				templateData: { dev: false, script: 'scripts/build/main.min' },
				template: 'index.hbs',
				output: 'index.html'
			},
			dev: {
				globals: ['metadata.json'],
				templateData: { dev: true, script: 'scripts/main' },
				template: 'index.hbs',
				output: 'index.html'
			}
		},

		compass: {
			options: {
				config: 'config.rb',
				force: true
			},
			dist: {
				options: {
					outputStyle: 'compressed',
					environment: 'production'
				}
			},
			dev: {
				options: {
					outputStyle: 'expanded',
					environment: 'development'
				}
			}
		},

		clean: ['scripts/build'],

		handlebars: {
			compile: {
				options: {
					amd: 'handlebars.runtime',
					namespace: false
				},
				expand: true,
				cwd: 'templates',
				src: ['**/*.hbs'],
				dest: 'scripts/build/templates',
				ext: '.js'
			}
		},

		requirejs: {
			compile: {
				options: {
					mainConfigFile: "scripts/main.js",
					name: 'main',
					out: "scripts/build/main.min.js",
					stubModules : ['json', 'text'],
					preserveLicenseComments: false,
					findNestedDependencies: true,
					generateSourceMaps: true,
					optimize: "uglify2"
				}
			}
		},

		watch: {
			styles: {
				files: ['styles/**/*.scss'],
				tasks: ['compass:dev']
			},
			templates: {
				files: ['templates/**/*.hbs'],
				tasks: ['clean', 'handlebars']
			}
		}
	});

	grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dist', ['compile-handlebars:dist', 'compass:dist', 'clean', 'handlebars', 'requirejs']);
	grunt.registerTask('dev', ['compile-handlebars:dev', 'compass:dev', 'clean', 'handlebars']);
	grunt.registerTask('default', ['dev', 'watch']);
};