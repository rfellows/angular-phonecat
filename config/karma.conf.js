module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      'test/testRequireJsConfig.js',
      'app/lib/angular/angular.js',
      'app/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'test/lib/angular/angular-scenario.js',
      'app/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude: [
      'app/js/requirejsConfig.js'
    ],

    frameworks: ['jasmine', 'requirejs'],

    autoWatch: true,

    browsers: ['Chrome'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    logLevel: LOG_INFO

  });
};
