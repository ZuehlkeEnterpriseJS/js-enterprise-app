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

  function setDone(id) {
    var matchingTodo = _.find(todos, {id: id});
    if (!matchingTodo) {
      throw new Error('No Todo item with id ' + id + ' found!');
    } else {
      matchingTodo.done = true;
      todos.sort(sortByStatusComparator);
    }
  }

  function getTodos() {
    return todos;
  }

  function clear() {
    idCounter = 0;
    todos = [];
  }

  function sortByStatusComparator(todo1, todo2) {
    var result = 0;

    if(todo1.done && !todo2.done){
      result = 1;
    } else if(!todo1.done && todo2.done){
      result = -1;
    }

    return result;
  }

  return {
    clear: clear,
    addTodo: addTodo,
    setDone: setDone,
    getTodos: getTodos
  };
});
