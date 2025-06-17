async function bootstrap() {
  // const pinoStrategy = process.env.NODE_ENV === 'production' ? PRODUCTION_STRATEGY : DEVELOPMENT_STRATEGY;
  // const logger = new PinoService(pinoStrategy);

  // const app = await NestFactory.create<NestFastifyApplication>(new FastifyAdapter());

  // await app.listen({ port: appConfig.port, host: 'localhost' });

  const context = 'Bootstrap';
  // logger.log(`Listening on ${JSON.stringify(app.getHttpServer().address())}`, context);
}

bootstrap();
