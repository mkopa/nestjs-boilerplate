import { Logger, Module } from '@nestjs/common';
import { TaskController } from './controllers';
import { TasksService } from './providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from './entities/tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TasksEntity])],
  controllers: [TaskController],
  providers: [TasksService, Logger],
})
export class TasksModule {}
