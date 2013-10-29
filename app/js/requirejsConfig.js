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
    'common-ui/angular-resource': { deps: ['common-ui/angular'] },
    'common-ui/angular-route': { deps: ['common-ui/angular'] }
  }
}

pen.require.config(config);
