import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { TasksService } from '../providers/tasks.service';
import {
  CreateTaskDto,
  createTaskSchema,
  RemoveTaskDto,
  removeTaskSchema,
  UpdateTaskDto,
  updateTaskSchema,
} from '../dto';
import { JoiValidationPipe } from '../../common/pipes';
import { TasksEntity } from '../entities/tasks.entity';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';
import { ParamAndBody } from '../../common/decorators/param-and-body.decorator';

@UseInterceptors(LoggingInterceptor)
@Controller()
export class TaskController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getTasks(): Promise<TasksEntity[]> {
    return this.tasksService.getTasks();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createTaskSchema))
  async createTask(@Body() createTodoDto: CreateTaskDto) {
    await this.tasksService.createTask(createTodoDto);
  }

  @Patch(':id')
  @UsePipes(new JoiValidationPipe(updateTaskSchema))
  async updateTask(@ParamAndBody() updateTaskDto: UpdateTaskDto) {
    await this.tasksService.updateTask(updateTaskDto);
  }

  @Delete(':id')
  @UsePipes(new JoiValidationPipe(removeTaskSchema))
  async removeTask(@Param() params: RemoveTaskDto) {
    await this.tasksService.removeTask(params.id);
  }
}
