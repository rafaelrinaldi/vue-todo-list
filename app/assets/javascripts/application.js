'use strict';

require.config({
  paths: {
    // Templates
    'partials': '../../assets/partials',

    // Libraries
    'mout': '../../../vendor/assets/bower/mout/src',
    'vue': '../../../vendor/assets/bower/vue/dist/vue',
    'jquery-adapter': '../../../vendor/assets/javascripts/jqueryAdapter',
    'jquery': '../../../vendor/assets/bower/jquery/dist/jquery',

    // Plugins
    'text': '../../../vendor/assets/bower/requirejs-text/text',

    "lib": "../"
  },

  map: {
    'jquery-adapter' : {
      'jquery': 'jquery'
    },

    '*': {
      'jquery': 'jquery-adapter'
    }
  }
});

requirejs(
  [
    'require',
    'vue',
    './todo'
  ],
  function(
    require,
    Vue,
    Todo
  ) {
    var app = new Vue({
      el: '#app',

      components: {
        'todo': Todo
      }
    });
  }
);
