import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as helmet from 'helmet';
import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose']
  });
  app.use(helmet());
  app.enableCors();
  const serverConfig = config.get('server')

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  Logger.log(`Application listening on port ${port}`);
}
bootstrap();
