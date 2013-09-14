module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../..',
        frameworks: ['jasmine'],

        // base path, that will be used to resolve files and exclude
        files: [
            'test/lib/angular.js',
            'test/lib/angular-mocks.js',
            'app/scripts/**/*.js',
            'test/spec/**/*.js'
        ]
    });
};