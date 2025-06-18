import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { appConfig } from './config';
import { DEVELOPMENT_STRATEGY, PinoService } from './logger';

async function bootstrap() {
  const logger = new PinoService(DEVELOPMENT_STRATEGY);

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { logger });

  const config = new DocumentBuilder().addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen({ port: appConfig.port, host: 'localhost' });

  const context = 'Bootstrap';
  logger.log(`Listening on ${JSON.stringify(app.getHttpServer().address())}`, context);
}

bootstrap();
