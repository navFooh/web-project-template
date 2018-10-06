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
			mainConfigFile: 'scripts/main.js',
			out: 'main.min.js',
			name: 'main',
			include: ['require-lib'],
			stubModules: ['json', 'text'],
			optimize: 'uglify',
			wrapShim: true
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
