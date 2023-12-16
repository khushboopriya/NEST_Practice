import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './app.service';

@Controller('book')
export class BookController {
  //add book
  public bookService: BookService = new BookService();

  @Post('/add')
  addBook(): string {
    // return 'This will add book';
    return this.bookService.addBook();
  }
  //delete book
  @Delete('/delete')
  deleteBook(): string {
    // return 'This will add book';
    return this.bookService.deleteBook();
  }
  //update book
  @Put('/update')
  updateBook(): string {
    return 'This will update book';
  }
  //find all book
  @Get('/findAll')
  findBook(): string {
    return 'This will find books';
  }

  //find all book
  @Get('/findBookById/:bookId')
  findBookByID(@Param() params): string {
    return `This book is of id: ${params.bookId}`;
  }
}
