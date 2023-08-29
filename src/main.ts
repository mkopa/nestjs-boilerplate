import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger,
    cors: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
