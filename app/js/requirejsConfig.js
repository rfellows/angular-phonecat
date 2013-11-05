pen = {};
pen.require = function() {
    require.apply(this, arguments);
} 
pen.define = function() {
    define.apply(this, arguments);
}

requirejs.config({
  baseUrl: '.',
  paths: {
    'common-ui/angular': 'lib/angular/angular',
    'common-ui/angular-resource': 'lib/angular/angular-resource',
    'common-ui/angular-route': 'lib/angular/angular-route',
    'common-ui/angular-ui-bootstrap': 'lib/ui-bootstrap-tpls-0.6.0.min',
    'phonecat': 'js'
  },

  shim: {
    'common-ui/angular': { exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
    'common-ui/angular-ui-bootstrap': { deps: ['common-ui/angular'] }
  }
});
