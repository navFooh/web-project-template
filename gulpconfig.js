const argv = require('yargs').argv;
const dev = !argv.dist;

module.exports = {

	dev: dev,
	pkg: require('./package.json'),
	meta: require('./metadata.json'),

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
		options: {
			out: 'main.min.js',
			name: 'main',
			mainConfigFile: 'scripts/main.js',
			include: ['require-lib'],
			stubModules : ['json', 'text'],
			preserveLicenseComments: false,
			findNestedDependencies: false,
			generateSourceMaps: false,
			wrapShim: true,
			optimize: 'uglify'
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
};
