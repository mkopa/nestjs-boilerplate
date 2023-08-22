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
import { TodoService } from '../providers/todo.service';
import {
  CreateTodoDto,
  createTodoSchema,
  RemoveTodoDto,
  removeTodoSchema,
  UpdateTodoDto,
  updateTodoSchema,
} from '../dto';
import { JoiValidationPipe } from '../../common/pipes';
import { TodoEntity } from '../entities/todo.entity';
import { LoggingInterceptor } from '../../common/interceptors/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos(): Promise<TodoEntity[]> {
    return this.todoService.getTodos();
  }

  @Post()
  @UsePipes(new JoiValidationPipe(createTodoSchema))
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    await this.todoService.createTodo(createTodoDto);
  }

  @Patch()
  @UsePipes(new JoiValidationPipe(updateTodoSchema))
  async updateTodo(@Body() updateTodoDto: UpdateTodoDto) {
    await this.todoService.updateTodo(updateTodoDto);
  }

  @Delete(':id')
  @UsePipes(new JoiValidationPipe(removeTodoSchema))
  async removeTodo(@Param() params: RemoveTodoDto) {
    await this.todoService.removeTodo(params.id);
  }
}
