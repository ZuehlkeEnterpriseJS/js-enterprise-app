var service;

beforeEach(function (done) {

  require(['TodoService'], function (todoService) {
    service = todoService;
    service.clear();
    done();
  });

});

describe('TodoService', function () {

  it('isDefined', function () {
    expect(service).toBeDefined();
  });

  describe('#addTodo()', function () {

    it('should be able to add a new todo', function () {
      var addedTodo = service.addTodo('My new Todo task');
      expect(addedTodo).toBeDefined();
      expect(addedTodo.id).toBeDefined();
      expect(addedTodo.timeStamp).toBeDefined();
      expect(addedTodo.done).toBeDefined();
      expect(addedTodo.done).toBe(false);
    });

    it('should return the newly added task', function () {
      service.addTodo('My super task');
      expect(service.getTodos().length).toBe(1);
    });

  });

  describe('#setDone()', function () {

    it('should be able to set a todo to done', function () {
      var addedTodo = service.addTodo('My new Todo task');
      service.setDone(addedTodo.id);

      expect(addedTodo.done).toBe(true);
      expect(service.getTodos()[0].done).toBe(true);

    });

    it('should throw if todo is not found', function () {
      expect(function () {
        service.setDone('some-fantasy-id');
      }).toThrowError('No Todo item with id some-fantasy-id found!');

    });

  });

  describe('#getTasks()', function () {

    it('should return an empty list if no tasks defined', function () {
      expect(service.getTodos().length).toBe(0);
    });

    it('should return all added tasks', function () {
      service.addTodo('todo1');
      service.addTodo('todo2');

      expect(service.getTodos().length).toBe(2);
    });

  });

  describe('#clear()', function () {

    it('should return an empty list after clearing', function () {
      service.addTodo('todo1');
      service.clear();

      expect(service.getTodos().length).toBe(0);
    });
  });

});
