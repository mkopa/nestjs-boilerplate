import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../tasks/providers';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TasksEntity } from '../tasks/entities';
import { Repository } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto } from '../tasks/dto';

describe('TasksService', () => {
  let tasksService: TasksService;
  let taskRepository: Repository<TasksEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(TasksEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    tasksService = module.get<TasksService>(TasksService);
    taskRepository = module.get<Repository<TasksEntity>>(
      getRepositoryToken(TasksEntity),
    );
  });

  it('should have the service defined', () => {
    expect(tasksService).toBeDefined();
  });

  it('should return for getTasks', async () => {
    const testTask: TasksEntity = {
      id: 1,
      content: 'some task content',
      done: false,
    };

    jest.spyOn(taskRepository, 'find').mockResolvedValueOnce([testTask]);
    expect(await tasksService.getTasks()).toEqual([testTask]);
  });

  it('should return for createTask', async () => {
    const testTask: TasksEntity = {
      id: 1,
      content: 'some task content',
      done: false,
    };

    const testCreateTask: CreateTaskDto = {
      content: 'some task content',
    };

    jest.spyOn(taskRepository, 'save').mockResolvedValueOnce(testTask);
    expect(await tasksService.createTask(testCreateTask)).toEqual(testTask);
  });

  it('should return for updateTask', async () => {
    const testUpdateTask: UpdateTaskDto = { id: 1, done: true };

    const testUpdateResult = { generatedMaps: [], raw: [], affected: 1 };

    jest
      .spyOn(taskRepository, 'update')
      .mockResolvedValueOnce(testUpdateResult);

    expect(await tasksService.updateTask(testUpdateTask)).toEqual(
      testUpdateResult,
    );
  });

  it('should return for removeTask', async () => {
    const testDeleteResult = { raw: [], affected: 1 };

    jest
      .spyOn(taskRepository, 'delete')
      .mockResolvedValueOnce(testDeleteResult);
    expect(await tasksService.removeTask(1)).toEqual(testDeleteResult);
  });
});
