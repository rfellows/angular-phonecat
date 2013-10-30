module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'requirejs'],

    files: [
      {pattern: '../app/lib/angular/angular*.js', included: false},
      {pattern: '../test/lib/angular/angular*.js', included: false},
      {pattern: '../app/js/**/*.js', included: false},
      {pattern: '../test/unit/**/*.js', included: false},
      '../test/testRequireJsConfig.js'
    ],

    exclude: [
      '../app/js/requirejsConfig.js',
      '../app/js/main.js'
    ],

    autoWatch: true,

    browsers: ['Chrome'],
    reporters: ['progress'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    logLevel: config.LOG_DEBUG

  });
};
