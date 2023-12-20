import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction } from 'express';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('This is global middleware 1');
  next();
}

function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('This is global middleware 1');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleWareOne);
  app.use(globalMiddleWareTwo);
  await app.listen(3000);
}
bootstrap();
