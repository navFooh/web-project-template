const argv = require('yargs').argv;
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const dev = !argv.dist;

require('gulp-require-tasks')({
	path: __dirname + '/scripts/gulp',
	arguments: [{

		dev: dev,
		pkg: require('./package.json'),
		meta: require('./metadata.json'),
		browserSync: browserSync,

		hbsRuntime: {
			base: 'templates/runtime',
			src: __dirname + '/templates/runtime/**/*.hbs',
			dest: __dirname + '/scripts/templates'
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
				name: 'main',
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
				browsers: ['last 3 versions'],
				cascade: false
			}
		}
	}]
});

gulp.task('default', function (callback) {
	dev ? runSequence('build', 'serve', 'watch', callback)
		: runSequence('build', callback);
});

gulp.task('build', function (callback) {
	dev ? runSequence(['hbs-runtime:compile', 'hbs-static:compile', 'requirejs:clean', 'sass:compile'], callback)
		: runSequence(['hbs-runtime:compile', 'hbs-static:compile', 'requirejs:compile', 'sass:compile'], callback);
});

gulp.task('serve', function (callback) {
	browserSync.init({
		files: 'scripts/app/**/*.js',
		server: true,
		startPath: 'public'
	});
	callback();
});

gulp.task('watch', ['hbs-runtime:watch', 'hbs-static:watch', 'sass:watch']);
