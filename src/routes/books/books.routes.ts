/* eslint-disable array-callback-return */
import { Router } from 'express';
import { uuid } from 'uuidv4';

const routerBooks = Router();

interface IBooks {
  id: string;
  author: string;
  name: string;
  amount: number;
}

const books: any[] = [];

routerBooks.post('/register-book', (request, response) => {
  const { author, name, amount } = request.body;
  const book:IBooks = {
    id: uuid(), author, name, amount,
  };
  books.push(book);

  return response.json(book);
});

routerBooks.get('/list-all-books', (request, response) => response.json({ books }));

routerBooks.get('/list-one-book-name', (request, response) => {
  const { name } = request.body;
  const matchBooks: any[] = [];
  const findBook = books.map((book) => {
    if (book.name === name) {
      matchBooks.push(book);
    }
  });

  if (findBook) {
    return response.status(200).json({ matchBooks });
  }
  return response.status(400).json({ message: `Livro ${name} não encontrado` });
});

routerBooks.get('/list-one-book-author', (request, response) => {
  const { author } = request.body;
  const matchBooks: any[] = [];
  const findBook = books.map((book) => {
    if (book.author === author) {
      matchBooks.push(book);
    }
  });

  if (findBook) {
    return response.status(200).json({ matchBooks });
  }
  return response.status(400).json({ message: `Livro do ${author} não encontrado` });
});

export default routerBooks;
