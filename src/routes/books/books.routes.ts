/* eslint-disable array-callback-return */
import { Router } from 'express';
import Book from '../../models/Book';

const routerBooks = Router();

const books: Book[] = [];

routerBooks.post('/register-book', (request, response) => {
  const {
    author, name, language, amount,
  } = request.body;
  const book = new Book(name, author, language, amount);
  books.push(book);

  return response.json(book);
});

// PUTS//

routerBooks.get('/list-all-books', (request, response) => response.json({ books }));

routerBooks.get('/list-one-book-name/:name', (request, response) => {
  const { name } = request.params;
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
routerBooks.get('/list-one-book-author/:author', (request, response) => {
  const { author } = request.params;
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
routerBooks.get('/list-one-book-language/:language', (request, response) => {
  const { language } = request.params;
  const matchBooks: any[] = [];
  const findBook = books.map((book) => {
    if (book.language === language) {
      matchBooks.push(book);
    }
  });

  if (findBook) {
    return response.status(200).json({ matchBooks });
  }
  return response.status(400).json({ message: `Livro do ${language} não encontrado` });
});

routerBooks.delete('/delete-book', (request, response) => {
  const { id } = request.body;
  books.map((book) => {
    if (book.id === id) {
      books.splice(books.indexOf(id), 1);
      return response.status(200).json({ message: 'Livro deleteado com sucesso!' });
    }
  });
  return response.status(400).json({ message: `Livro com o id:${id} não encontrado` });
});

export default routerBooks;
