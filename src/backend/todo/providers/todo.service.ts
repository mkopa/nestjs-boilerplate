import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from '../entities/todo.entity';
import { Repository } from 'typeorm';
import { UpdateTodoDto } from '../dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async getTodos(): Promise<TodoEntity[]> {
    return this.todoRepository.find();
  }

  async createTodo(todo: CreateTodoDto) {
    await this.todoRepository.save(todo);
  }

  async updateTodo(todo: UpdateTodoDto) {
    const id = todo.id;

    await this.todoRepository.update({ id }, { ...todo });
  }

  async removeTodo(id: number) {
    await this.todoRepository.delete(id);
  }
}
