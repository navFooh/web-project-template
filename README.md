# Web Project Template
This is a project starter for HTML / CSS / JS development. The main components are [RequireJS](http://requirejs.org/)
for dependency management, [Backbone.js](http://backbonejs.org/) for a basic model / view structure,
[Handlebars](http://handlebarsjs.com/) for rendering html-templates and [Compass](http://compass-style.org/) for
compiling the style sheets. It also includes [TweenMax](http://greensock.com/tweenmax), which is not
essential for the setup but a very neat tool for animation.

To wrap it all up, [Grunt](http://gruntjs.com/) handles all the compilation tasks and runs a watcher for development.

## What's it good for
It should be noted that this template does not include any server-side scripts, so additional tools will be needed to
render initial content based on an entry point for example. Any information that web crawlers should read needs to be
served in the index.html.

Therefore this template is more suited for single page websites. Personally I like to use it for experiments, with
web-gl or web audio for example, so all the tedious tasks are automated and I can focus on the things that matter.

In setting up this template I've considered several options and decided on a couple of things:
- Using Grunt for compiling the RequireJS setup to a minified file is nice, but running a watcher to do this
real-time during development is a bit too heavy. So when starting the development-task the normal require.js setup is
used, pointing the data-main attribute to main.js. When running the distribution-task, data-main points to the minified
file generated with the optimizer
- It might still be handy to get some useful console output when running in distribution mode, so a source mapping file
is generated with the main.min.js file. If you don't (want to) supply your original source files when deploying,
you should set `generateSourceMaps: false` in Gruntfile.js
- The Bower packages are downloaded to scripts/vendor as opposed to the standard bower_components folder, so that
everything RequireJS includes resides inside the scripts folder
- [injector.js](https://github.com/biggerboat/injector.js) is used for dependency injection, which I prefer as a method
for making Backbone models available in Backbone views. A custom plugin automatically injects the injector itself into
a view, if supplied when initializing the view: `new Backbone.View({ injector: this.injector });`
- A Backbone autobind plugin is useful in any Backbone object to ensure `this` always refers the the object itself in
it's methods
- Likewise, Backbone-super simplifies calling an extended Backbone object's parent method

## Installation
To get started, the vendor tools need to be installed. If you haven't already, make sure you have
[Node.js](http://nodejs.org/) and [Bower](http://bower.io/) up and running.
Then run these commands in the template's directory:
```
npm install
bower install
```

## Grunt tasks
There are two grunt-modes; development and distribution.
```
grunt dist
```
Runs the distribution task, which:
- points require to scripts/build/main.min.js
- compiles the CSS to a compressed file
- compiles the Handlebars templates to javascript
- packages the vendor scripts, custom scripts and compiled templates in the main.min.js
```
grunt dev
```
Runs the development task, which:
- points require to scripts/main.js
- compiles the CSS to an expanded file
- compiles the Handlebars templates to javascript
```
grunt
```
Runs the the development task and then starts a watcher to listen for changes in the
.scss and .hbs files, to recompile the CSS and Handlebars templates respectively
