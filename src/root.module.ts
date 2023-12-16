import { Module } from '@nestjs/common';
import { OrdersModule } from './orders.module';
import { UsersModule } from './users.module';
import { ChatModule } from './chat.module';
import { BookController } from './app.controller';

@Module({
  imports: [OrdersModule, UsersModule, ChatModule],
  controllers: [BookController],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('App module');
  }
}
