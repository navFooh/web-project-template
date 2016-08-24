var fs = require('fs'),
	gulp = require('gulp'),
	argv = require('yargs').argv,
	dev = !argv.dist;

require('gulp-require-tasks')({
	path: __dirname + '/scripts/gulp',
	arguments: [{

		dev: dev,
		pkg: JSON.parse(fs.readFileSync(__dirname + '/package.json')),
		meta: JSON.parse(fs.readFileSync(__dirname + '/metadata.json')),

		hbsStatic: {
			src: __dirname + '/templates/static/index.hbs',
			watch: __dirname + '/templates/static/**/*.hbs',
			dest: __dirname + '/public',
			name: 'index.html'
		},

		hbsRuntime: {
			src: __dirname + '/templates/runtime/**/*.hbs',
			dest: __dirname + '/templates/build'
		},

		sass: {
			src: __dirname + '/styles/**/*.scss',
			dest: __dirname + '/public/css',
			options: { outputStyle: dev ? 'nested' : 'compressed' },
			autoprefixer: {
				browsers: ['last 2 versions'],
				cascade: false
			}
		},

		requirejs: {
			src: __dirname + '/scripts/main.js',
			dest: __dirname + '/public/js',
			name: 'main.min.js',
			options: {
				mainConfigFile: 'scripts/main.js',
				include: ['requireLib'],
				stubModules : ['json', 'text'],
				preserveLicenseComments: false,
				findNestedDependencies: false,
				generateSourceMaps: false,
				optimize: 'uglify2'
			}
		}
	}]
});

gulp.task('default', dev
	? ['hbs-static:watch', 'hbs-runtime:watch', 'requirejs:clean', 'sass:watch']
	: ['hbs-static:compile', 'requirejs:compile', 'sass:compile']
);
