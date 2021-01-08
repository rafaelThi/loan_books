import Book from '../models/Book';

class BooksRepository {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  public createBook(author: string, name: string, language: string, amount: number):Book {
    const book = new Book(name, author, language, amount);
    this.books.push(book);
    return book;
  }

  public listAllBooks():Book[] {
    return this.books;
  }

  public listBookName(name:string): Book[] {
    const matchBooks: Book[] = [];
    this.books.map((book) => {
      if (book.name === name) {
        matchBooks.push(book);
      }
      return matchBooks;
    });
    return matchBooks;
  }

  public listBookAuthor(author:string): Book[] {
    const matchBooks: Book[] = [];
    this.books.map((book) => {
      if (book.author === author) {
        matchBooks.push(book);
      }
      return matchBooks;
    });
    return matchBooks;
  }

  public listBookLanguage(language: string): Book[] {
    const matchBooks: Book[] = [];
    this.books.map((book) => {
      if (book.language === language) {
        matchBooks.push(book);
      }
      return matchBooks;
    });
    return matchBooks;
  }

  public deleteBook(id: any):void {
    this.books.map((book) => {
      if (book.id === id) {
        this.books.splice(this.books.indexOf(id), 1);
      }
      return book;
    });
  }
}

export default BooksRepository;
