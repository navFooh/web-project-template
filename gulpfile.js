const fs = require('fs');
const gulp = require('gulp');
const argv = require('yargs').argv;
const dev = !argv.dist;

require('gulp-require-tasks')({
	path: __dirname + '/scripts/gulp',
	arguments: [{

		dev: dev,
		pkg: JSON.parse(fs.readFileSync(__dirname + '/package.json')),
		meta: JSON.parse(fs.readFileSync(__dirname + '/metadata.json')),

		hbsRuntime: {
			src: __dirname + '/templates/runtime/**/*.hbs',
			dest: __dirname + '/templates/build'
		},

		hbsStatic: {
			src: __dirname + '/templates/static/index.hbs',
			watch: __dirname + '/templates/static/**/*.hbs',
			dest: __dirname + '/public',
			name: 'index.html'
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
		},

		sass: {
			src: __dirname + '/styles/**/*.scss',
			dest: __dirname + '/public/css',
			options: { outputStyle: dev ? 'nested' : 'compressed' },
			autoprefixer: {
				browsers: ['last 2 versions'],
				cascade: false
			}
		}
	}]
});

gulp.task('default', dev
	? ['hbs-runtime:watch', 'hbs-static:watch', 'requirejs:clean', 'sass:watch']
	: ['hbs-runtime:compile', 'hbs-static:compile', 'requirejs:compile', 'sass:compile']
);
