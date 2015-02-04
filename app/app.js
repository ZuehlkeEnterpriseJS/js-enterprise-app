'use strict';

define('app', ['TodoController'], function(controller) {
  window.todo = controller;
});

requirejs(['app']);
