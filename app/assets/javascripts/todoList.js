define(
[
  'vue',
  'text!partials/todoList'
], function(
  Vue,
  todoListTpl
) {

  return Vue.extend({
    template: todoListTpl,

    replace: true
  });

});
