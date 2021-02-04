/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntityRepository, Repository, Like } from 'typeorm';
import Book from '../models/Book';

@EntityRepository(Book)
class BooksRepository extends Repository<Book> {
  public async listBookName(name:string): Promise<Book[]> {
    // const matchBooks: Book[] = [];
    // this.books.map((book) => {
    //   if (book.name === name) {
    //     matchBooks.push(book);
    //   }
    const matchBooks = await this.find({
      name: Like(`%${name}%`),
    });
    return matchBooks;
  }

  public async listBookAuthor(author:string): Promise<Book[]> {
    const matchBooks = await this.find({
      author: Like(`%${author}%`),
    });
    return matchBooks;
  }

  public async listBookLanguage(language: string): Promise<Book[]> {
    const matchBooks = await this.find({
      language: Like(`%${language}%`),
    });
    return matchBooks;
  }

  public async deleteBook(id: any):Promise<void> {
    // this.books.map((book) => {
    //   if (book.id === id) {
    //     this.books.splice(this.books.indexOf(id), 1);
    //   }
    await this.delete({ id });
  }
}

export default BooksRepository;
