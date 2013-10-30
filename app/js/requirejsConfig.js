pen = {};
pen.require = require;
pen.define = define;

var config = {
  paths: {
    'common-ui/angular': 'lib/angular/angular',
    'common-ui/angular-resource': 'lib/angular/angular-resource',
    'common-ui/angular-route': 'lib/angular/angular-route',
    'phonecat': 'js'
  },

  shim: {
    'common-ui/angular': { exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
  }
}

pen.require.config(config);
