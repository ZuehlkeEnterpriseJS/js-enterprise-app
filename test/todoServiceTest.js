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

    it('should sort todos by status', function () {
      service.addTodo('todo1');
      service.addTodo('todo2');
      service.addTodo('todo3');

      service.setDone(1);

      expect(service.getTodos()[0].description).toBe('todo1');
      expect(service.getTodos()[1].description).toBe('todo3');
      expect(service.getTodos()[2].description).toBe('todo2');
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

    it('should return todos in order of insertion', function () {
      var todo1 = service.addTodo('todo1');
      var todo2 = service.addTodo('todo2');

      expect(service.getTodos().length).toBe(2);
      expect(service.getTodos()[0].id).toBe(todo1.id);
      expect(service.getTodos()[1].id).toBe(todo2.id);
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
