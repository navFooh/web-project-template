module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: ['public', 'templates/build'],

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
			index: {
				files: ['templates/index.hbs'],
				tasks: ['compile-handlebars:dev']
			},
			templates: {
				files: ['templates/parts/**/*.hbs'],
				tasks: ['handlebars']
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
				files: [
					{ expand: true, cwd: 'public', src: ['**/*'] },
					{ expand: true, cwd: 'assets', src: ['**/*'], dest: 'assets/' }
				]
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

	grunt.registerTask('dev', ['clean', 'compile-handlebars:dev', 'compass:dev', 'handlebars']);
	grunt.registerTask('dist', ['clean', 'compile-handlebars:dist', 'compass:dist', 'handlebars', 'requirejs']);
	grunt.registerTask('deploy', ['dist', 'ftp_push']);
	grunt.registerTask('default', ['dev', 'watch']);
};