import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from '@/app.module';

const logger = new Logger('NestApplication');

async function bootstrap(): Promise<number> {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const port: number = configService.get('PORT', 4000);

  await app.listen(port);
  return port;
}

bootstrap().then((port) => {
  logger.log(`Listening to port ${port}`);
});
