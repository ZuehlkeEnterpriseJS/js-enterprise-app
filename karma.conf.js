module.exports = function (config) {
  config.set({
    basePath: './',

    frameworks: ['jasmine' ],

    files: [
      'app/lib/lodash/lodash.min.js',
      'app/lib/requirejs/require.js',
      'app/todoService.js',
      'test/*.js'
    ],

    exclude: [
      'karma.conf.js'
    ],

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    // web server port
    port: 8081,

    // cli runner port
    runnerPort: 9000,

    reporters: ['progress'],

    captureTimeout: 7000
  });
};