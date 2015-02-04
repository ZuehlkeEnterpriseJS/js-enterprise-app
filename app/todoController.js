'use strict';

define('TodoController', ['TodoService'], function (todoService) {
  var descriptionInputElement = document.querySelector('#new-todo-description');
  var todoListElement = document.querySelector('#todo-list-panel');

  function onAdd() {
    var description = descriptionInputElement.value;

    if (description) {
      todoService.addTodo(description);
      descriptionInputElement.value = '';
      repaint();
    }
  }

  function onKeyUp(e) {
    var isEnterKey = e.keyCode === 13;

    if (isEnterKey) {
      onAdd();
    }
  }

  function repaint() {
    renderTodos(todoService.getTodos());
  }

  function renderTodos(todos) {
    var compiled = _.template('<% _.forEach(todos, function(todo) { var itemClass = todo.done?\'done\':\'\';%><li class="list-group-item <%- itemClass %>"><%- todo.description %><button class="btn btn-xs pull-right" onclick="todo.onSetDone(<%- todo.id %>)"><i class="glyphicon glyphicon-ok"></i></button></li><% }); %>');
    todoListElement.innerHTML = compiled({todos: todos});
  }

  function onSetDone(todoId) {
    todoService.setDone(todoId);
    repaint();
  }

  function onClear() {
    todoService.clear();
    repaint();
  }

  return {
    onSetDone: onSetDone,
    onAdd: onAdd,
    onKeyUp: onKeyUp,
    onClear: onClear
  };
});
