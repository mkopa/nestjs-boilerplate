import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../tasks/providers';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TasksEntity } from '../tasks/entities';
import { Repository } from 'typeorm';
import { CreateTaskDto, RemoveTaskDto, UpdateTaskDto } from '../tasks/dto';
import { TaskController } from '../tasks/controllers';
import { Logger } from '@nestjs/common';

describe('TaskController', () => {
  let taskController: TaskController;
  let tasksService: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(TasksEntity),
          useClass: Repository,
        },
        Logger,
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
    taskController = module.get<TaskController>(TaskController);
  });

  it('should have the service defined', () => {
    expect(taskController).toBeDefined();
  });

  it('should return for getTasks', async () => {
    const testTask: TasksEntity = {
      id: 1,
      content: 'some task content',
      done: false,
    };

    jest.spyOn(tasksService, 'getTasks').mockResolvedValueOnce([testTask]);
    expect(await taskController.getTasks()).toEqual([testTask]);
  });

  it('should return for createTask', async () => {
    const testCreateTask: CreateTaskDto = {
      content: 'some task content',
    };

    jest.spyOn(tasksService, 'createTask').mockResolvedValueOnce(undefined);
    expect(await taskController.createTask(testCreateTask)).toEqual(undefined);
  });

  it('should return for updateTask', async () => {
    const testUpdateTask: UpdateTaskDto = { id: 1, done: true };

    jest.spyOn(tasksService, 'updateTask').mockResolvedValueOnce(undefined);

    expect(await taskController.updateTask(testUpdateTask)).toEqual(undefined);
  });

  it('should return for removeTask', async () => {
    const testRemoveTask: RemoveTaskDto = { id: 1 };

    jest.spyOn(tasksService, 'removeTask').mockResolvedValueOnce(undefined);
    expect(await taskController.removeTask(testRemoveTask)).toEqual(undefined);
  });
});
