module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		'compile-handlebars': {
			dev: {
				globals: ['metadata.json'],
				templateData: { dev: true, script: '../scripts/main' },
				template: 'templates/index.hbs',
				output: 'public/index.html'
			},
			dist: {
				globals: ['metadata.json'],
				templateData: { dev: false, script: 'js/main.min' },
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

		clean: ['public', 'templates/build'],

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
			templates: {
				files: ['templates/**/*.hbs'],
				tasks: ['clean', 'handlebars']
			}
		},

		ftp_push: {
			live: {
				options: {
					authKey: 'key',
					host: 'ftp.strato.com',
					dest: '<%= pkg.name %>',
					port: 21
				},
				files: [{
					expand: true,
					cwd: '.',
					src: [
						'assets/**',
						'scripts/build/main.min.js',
						'scripts/vendor/requirejs/require.js',
						'styles/style.css',
						'index.html'
					]
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ftp-push');

	grunt.registerTask('dev', ['compile-handlebars:dev', 'compass:dev', 'clean', 'handlebars']);
	grunt.registerTask('dist', ['compile-handlebars:dist', 'compass:dist', 'clean', 'handlebars', 'requirejs']);
	grunt.registerTask('deploy', ['dist', 'ftp_push']);
	grunt.registerTask('default', ['dev', 'watch']);
};