import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { TasksEntity } from '../../tasks/entities';

export const typeormModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('database.host'),
    port: +configService.get('database.port'),
    username: configService.get('database.user'),
    password: configService.get('database.password'),
    database: configService.get('database.db'),
    entities: [TasksEntity],
    synchronize: true,
  }),
  dataSourceFactory: async (options) => {
    const dataSource = await new DataSource(options).initialize();
    return dataSource;
  },
});
