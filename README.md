# Web Project Template
This is a project starter for HTML / CSS / JS development.

The main components are [RequireJS](http://requirejs.org/) for dependency management,
[Backbone.js](http://backbonejs.org/) for a basic model / view structure, [Handlebars](http://handlebarsjs.com/)
for rendering html-templates and [Compass](http://compass-style.org/) for compiling the style sheets.

It also includes the [GreenSock](http://greensock.com/) libraries for animation and
[Hammer.js](http://hammerjs.github.io/) for supporting touch.

To wrap it all up, [Grunt](http://gruntjs.com/) handles all the compilation tasks.

## What's it good for
It should be noted that this template does not include any server-side scripts, so additional tools will be needed to
render initial content based on an entry point, for example. Any information that web crawlers should read needs to be
served in the index.html (which is generated from index.hbs).

Therefore this template is more suited for single page websites. Personally I like to use it for experiments, with
web-gl or web audio for example, so all the tedious tasks are automated and I can focus on the things that matter.

## Installation
To get started, the vendor tools need to be installed. If you haven't already, make sure you have
[Node.js](http://nodejs.org/) and [Bower](http://bower.io/) up and running.
Then run these commands in the template's directory:
```
npm install
bower install
```

## Grunt tasks
`grunt`
Runs
- `grunt dev`
- watches for changes in .scss and .hbs files to recompile
`grunt dev`
Runs the development task, which:
- builds a development version of index.html
- compiles the CSS to an expanded file
- compiles the Handlebars templates to javascript
`grunt dist`
Runs the distribution task, which:
- builds a distribution version of index.html
- compiles the CSS to a compressed file
- compiles the Handlebars templates to javascript
- packages all the javascript in main.min.js
`grunt deploy`
Runs
- `grunt dist`
- deploys to a server with FTP