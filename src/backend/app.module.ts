import { Logger, Module } from '@nestjs/common';
import { TodoModule } from './todo';
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
    TodoModule,
    RouterModule.register([
      {
        path: 'todo',
        module: TodoModule,
      },
    ]),
  ],
  providers: [Logger],
})
export class AppModule {}
