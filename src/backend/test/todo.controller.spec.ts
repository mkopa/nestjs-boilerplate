import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from '../todo/controllers';
import { TodoService } from '../todo/providers';

describe('AppController', () => {
  let todoController: TodoController;

  beforeEach(async () => {
    const todo: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoController = todo.get<TodoController>(TodoController);
  });

  describe('root', () => {
    it('should return "Todos"', () => {
      expect(todoController.getTodos()).toBe('Todos');
    });
  });
});
