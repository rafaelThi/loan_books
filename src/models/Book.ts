import { uuid } from 'uuidv4';

class Book {
  id: string;

  name: string;

  author: string;

  language: string;

  amount: number;

  constructor({
    name, author, language, amount,
  }: Omit<Book, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.author = author;
    this.language = language;
    this.amount = amount;
  }
}

export default Book;
