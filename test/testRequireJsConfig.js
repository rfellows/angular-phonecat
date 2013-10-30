var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/Spec\.js$/).test(file);
});

pen = {};
pen.require = function() {
    require.apply(this, arguments);
} 
pen.define = function() {
    define.apply(this, arguments);
}


requirejs.config({

  baseUrl: 'base/app',
  paths: {
    'common-ui/angular': 'lib/angular/angular',
    'common-ui/angular-resource': 'lib/angular/angular-resource',
    'common-ui/angular-route': 'lib/angular/angular-route',
    'angular-mocks': 'lib/angular/angular-mocks',
    'angular-scenario': 'lib/angular/angular-scenario',
    'phonecat': 'js'
  },

  shim: {
    'common-ui/angular': { exports: 'angular' },
    'common-ui/angular-resource': { deps: ['common-ui/angular'], exports: 'Resource' },
    'common-ui/angular-route': { deps: ['common-ui/angular'], exports: 'Route' },
    'angular-mocks': { deps: ['common-ui/angular-resource'] }
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: function() {
    window.__karma__.start();
  }
});

// pen.require.config(config);
