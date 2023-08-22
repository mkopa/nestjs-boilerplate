import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from '../dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksEntity } from '../entities/tasks.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private taskRepository: Repository<TasksEntity>,
  ) {}

  async getTasks(): Promise<TasksEntity[]> {
    return this.taskRepository.find();
  }

  async createTask(todo: CreateTaskDto) {
    await this.taskRepository.save(todo);
  }

  async updateTask(todo: UpdateTaskDto) {
    const id = todo.id;

    await this.taskRepository.update({ id }, { ...todo });
  }

  async removeTask(id: number) {
    await this.taskRepository.delete(id);
  }
}
