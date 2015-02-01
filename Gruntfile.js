module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			publicDir: ['public/*', '!public/assets'],
			templates: ['templates/build']
		},

		'compile-handlebars': {
			dev: {
				globals: ['metadata.json'],
				templateData: { dev: true },
				template: 'templates/index.hbs',
				output: 'public/index.html'
			},
			dist: {
				globals: ['metadata.json'],
				templateData: { dev: false },
				template: 'templates/index.hbs',
				output: 'public/index.html'
			}
		},

		compass: {
			options: {
				config: 'config.rb',
				force: true
			},
			dev: {
				options: {
					outputStyle: 'expanded',
					environment: 'development'
				}
			},
			dist: {
				options: {
					outputStyle: 'compressed',
					environment: 'production'
				}
			}
		},

		handlebars: {
			compile: {
				options: {
					amd: 'handlebars.runtime',
					namespace: false
				},
				expand: true,
				cwd: 'templates/parts',
				src: ['**/*.hbs'],
				dest: 'templates/build',
				ext: '.js'
			}
		},

		requirejs: {
			compile: {
				options: {
					mainConfigFile: "scripts/main.js",
					name: 'main',
					out: "public/js/main.min.js",
					include: ['requireLib'],
					stubModules : ['json', 'text'],
					preserveLicenseComments: false,
					findNestedDependencies: true,
					generateSourceMaps: false,
					optimize: "uglify2"
				}
			}
		},

		watch: {
			styles: {
				files: ['styles/**/*.scss'],
				tasks: ['compass:dev']
			},
			index: {
				files: ['templates/index.hbs'],
				tasks: ['compile-handlebars:dev']
			},
			templates: {
				files: ['templates/parts/**/*.hbs'],
				tasks: ['handlebars']
			}
		}
	});

	grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['clean', 'compile-handlebars:dev', 'compass:dev', 'handlebars']);
	grunt.registerTask('dist', ['clean', 'compile-handlebars:dist', 'compass:dist', 'handlebars', 'requirejs']);
	grunt.registerTask('default', ['dev', 'watch']);
};