define(
  [
    'jquery',
    'vue',
    './todoInput',
    'text!partials/todo.html'
  ],
  function(
    $,
    Vue,
    todoInput,
    todoTpl
  ) {
    return Vue.extend({
      template: todoTpl,

      data: {
        uid: -1,
        tasks: []
      },

      components: {
        'todo-input': todoInput
      },

      ready: function() {
        this.$on('todo:addItem', this.addItem);
      },

      methods: {
        addItem: function(model) {
          model.index = ++this.uid;
          this.tasks.push(model);
        },

        removeItem: function(itemIndex) {
          var position;

          this.tasks.forEach(function(item, index) {
            if(index === itemIndex) {
              position = index;
              return;
            }
          });

          this.tasks.splice(position, 1);
        }
      }
    });
  }
);
