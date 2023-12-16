import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BookService } from './app.service';

@Controller('book')
export class BookController {
  //add book
  // public bookService: BookService = new BookService();
  constructor(private bookService: BookService) {}

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
    // return 'This will update book';
    return this.bookService.updateBook();
  }
  //find all book
  @Get('/findAll')
  findBook(): string {
    // return 'This will find books';
    return this.bookService.findBook();
  }

  //find all book
  // @Get('/findBookById/:bookId')
  // findBookByID(@Param() params): string {
  //   return `This book is of id: ${params.bookId}`;
  // }
}
