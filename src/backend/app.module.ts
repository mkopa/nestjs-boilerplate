import { Logger, Module } from '@nestjs/common';
import { TasksModule } from './tasks';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config';
import { typeormModule } from './common/modules';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    typeormModule,
    TasksModule,
    RouterModule.register([
      {
        path: 'tasks',
        module: TasksModule,
      },
    ]),
  ],
  providers: [Logger],
})
export class AppModule {}
