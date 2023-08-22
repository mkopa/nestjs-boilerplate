import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from '../tasks/controllers';
import { TasksService } from '../tasks/providers';

describe('AppController', () => {
  let todoController: TaskController;

  beforeEach(async () => {
    const todo: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TasksService],
    }).compile();

    todoController = todo.get<TaskController>(TaskController);
  });

  describe('root', () => {
    it('should return "Todos"', () => {
      expect(todoController.getTasks()).toBe('Todos');
    });
  });
});
