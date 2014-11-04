module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		replace: {
			dist: {
				src: ['index.html'],
				overwrite: true,
				replacements: [{
					from: /data-main="(.*?)"/g,
					to: 'data-main="scripts/build/main.min"'
				}]
			},
			dev: {
				src: ['index.html'],
				overwrite: true,
				replacements: [{
					from: /data-main="(.*?)"/g,
					to: 'data-main="scripts/main"'
				}]
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

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-text-replace');

	grunt.registerTask('dist', ['replace:dist', 'compass:dist', 'clean', 'handlebars', 'requirejs']);
	grunt.registerTask('dev', ['replace:dev', 'compass:dev', 'clean', 'handlebars']);
	grunt.registerTask('default', ['dev', 'watch']);
};