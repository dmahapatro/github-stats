// Karma configuration
// Generated on Thu Feb 11 2016 19:17:05 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'grails-app/assets/javascripts/jquery-2.2.0.min.js',
      'grails-app/assets/javascripts/bower_components/angular/angular.js',
      'grails-app/assets/javascripts/bower_components/angular-resource/angular-resource.js',
      'grails-app/assets/javascripts/bower_components/angular-route/*.js',
      'grails-app/assets/javascripts/bower_components/angular-mocks/angular-mocks.js',
      'grails-app/assets/javascripts/bootstrap.js',
      'grails-app/assets/javascripts/bower_components/ui-bootstrap/*.js',
      'grails-app/assets/javascripts/dashboard/dashboard.js',
      'grails-app/assets/javascripts/dashboard/dashboard.service.js',
      'grails-app/assets/javascripts/dashboard/dashboard.controller.js',
      'grails-app/assets/javascripts/dashboard/dashboard.directive.js',
      'grails-app/assets/javascripts/application.js',
      'grails-app/assets/javascripts/**/*.js',
      'grails-app/angularSpec/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
