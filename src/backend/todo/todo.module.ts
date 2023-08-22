import { Logger, Module } from '@nestjs/common';
import { TodoController } from './controllers';
import { TodoService } from './providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [TodoService, Logger],
})
export class TodoModule {}
