import { Module } from '@nestjs/common';
import { OrdersModule } from './orders.module';
import { UsersModule } from './users.module';
import { ChatModule } from './chat.module';
import { BookController } from './app.controller';
import { BookService } from './app.service';

@Module({
  imports: [OrdersModule, UsersModule, ChatModule],
  controllers: [BookController],
  providers: [BookService],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('App module');
  }
}
