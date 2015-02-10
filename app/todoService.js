'use strict';


define('TodoService', function () {

  var idCounter = 0;
  var todos = [];

  function getAndIncrementIdCounter() {
    return idCounter++;
  }

  function addTodo(description) {
    var todoObject = {
      timeStamp: new Date(),
      description: description,
      id: getAndIncrementIdCounter(),
      done: false
    };
    todos.push(todoObject);
    return todoObject;
  }

  function setDone(Id) {
    var matchingTodo = _.find(todos, {id: id});
    if (!matchingTodo) {
      throw new Error('No Todo item with id ' + id + ' found!');
    } else {
      matchingTodo.done = true;
    }
  }

  function getTodos() {
    return todos;
  }

  function clear() {
    idCounter = 0;
    todos = [];
  }

  return {
    clear: clear,
    addTodo: addTodo,
    setDone: setDone,
    getTodos: getTodos
  };
});
