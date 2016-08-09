module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			index: ['public/index.html'],
			hbs: ['templates/build'],
			css: ['public/css'],
			js: ['public/js']
		},

		'compile-handlebars': {
			dev: {
				files: [{
					src: 'templates/index.hbs',
					dest: 'public/index.html'
				}],
				globals: ['metadata.json', 'package.json'],
				templateData: { dev: true }
			},
			dist: {
				files: [{
					src: 'templates/index.hbs',
					dest: 'public/index.html'
				}],
				globals: ['metadata.json', 'package.json'],
				templateData: { dev: false }
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

		compass: {
			options: {
				sassDir: 'styles',
				cssDir: 'public/css',
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

		requirejs: {
			compile: {
				options: {
					mainConfigFile: 'scripts/main.js',
					name: 'main',
					out: 'public/js/main.min.js',
					include: ['requireLib'],
					stubModules : ['json', 'text'],
					preserveLicenseComments: false,
					findNestedDependencies: false,
					generateSourceMaps: false,
					optimize: 'uglify2'
				}
			}
		},

		watch: {
			index: {
				files: ['templates/index.hbs'],
				tasks: ['compile-handlebars:dev']
			},
			templates: {
				files: ['templates/parts/**/*.hbs'],
				tasks: ['handlebars']
			},
			styles: {
				files: ['styles/**/*.scss'],
				tasks: ['compass:dev']
			}
		}
	});

	grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['clean', 'compile-handlebars:dev', 'handlebars', 'compass:dev']);
	grunt.registerTask('dist', ['clean', 'compile-handlebars:dist', 'handlebars', 'compass:dist', 'requirejs']);
	grunt.registerTask('default', ['dev', 'watch']);
};
