require(['/js/require-config.js'], function() {

  require([
    'require',
    'main',
  ], function(require){

    mocha.setup('tdd');

    require([
      '/unit/test-base-view.js',
      '/unit/test-utils.js',
      '/unit/test-errors.js',
      '/unit/test-mcc-mnc.js',
      '/unit/test-locale-utils.js',
      '/unit/test-persona-config.js'
    ], function() {
      if (window.mochaPhantomJS) {
        window.mochaPhantomJS.run();
      } else {
        window.mocha.run();
      }
    });
  });

});
