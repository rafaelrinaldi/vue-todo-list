define(
  [
    'vue',
    'text!partials/todoInput.html'
  ],
  function(
    Vue,
    todoInputTpl
  ) {
    return Vue.extend({
      template: todoInputTpl,

      data: {
        placeholder: 'Add a new item',
        input: ''
      },

      methods: {
        submitInput: function() {
          this.$dispatch('todo:addItem', {title: this.input, isChecked: false});
          this.input = '';
        }
      }
    });
  }
);
