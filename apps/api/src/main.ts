import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'fallback-session-secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      },
    }),
  );

  await app.listen(process.env.PORT ?? 4000);
}
await bootstrap();
