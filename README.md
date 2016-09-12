# Web Project Template
This is a project starter for HTML / CSS / JS development.

The main components are [RequireJS](http://requirejs.org/) for dependency management,
[Backbone.js](http://backbonejs.org/) for a basic model / view structure, [Handlebars](http://handlebarsjs.com/)
for rendering html-templates and [Sass](http://sass-lang.com/) for compiling the style sheets.
It also includes the [GreenSock](http://greensock.com/) library for animation.

To wrap it up, [Gulp](http://gulpjs.com/) handles all the compilation tasks.

## Installation
To get started, the vendor packages need to be installed. If you haven't already, make sure you have
[Node.js](http://nodejs.org/), [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) up and running.
Then run these commands in the template's directory:
```
npm install
bower install
```

## Gulp tasks
```
gulp
```
- compiles `index.hbs` to `index.html` for development
- compiles runtime `.hbs` files to `.js`
- compiles `.scss` to nested `.css`
- runs watchers for changes to above files

```
gulp --dist
```
- compiles `index.hbs` to `index.html` for production
- compiles runtime `.hbs` files to `.js`
- compiles `.scss` to compressed `.css`
- compiles all Javascript to `main.min.js`
