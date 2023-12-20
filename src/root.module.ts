import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { OrdersModule } from './orders.module';
import { UsersModule } from './users.module';
import { ChatModule } from './chat.module';
import { BookController } from './app.controller';
import { BookMiddleWare } from './book.middleware';

@Module({
  imports: [OrdersModule, UsersModule, ChatModule],
  controllers: [BookController],
  providers: [],
  exports: [],
})
export class RootModule implements NestModule {
  // constructor() {
  //   console.log('App module');
  // }

  //constructor and configure both will not work together so added this.
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented');
    consumer.apply(BookMiddleWare).forRoutes('book');
  }
}
