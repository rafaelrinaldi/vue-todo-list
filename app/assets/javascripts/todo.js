define(
  [
    'vue',
    'text!partials/todo.html'
  ],
  function(
    Vue,
    todoTpl
  ) {
    return Vue.extend({
      template: todoTpl,

      data: {
        tasks: [
          {title: 'Foo'},
          {title: 'Bar'},
          {title: 'Baz'},
          {title: 'Lorem'}
        ]
      },

      ready: function() {
        console.log('component ready');
      }
    });
  }
);
