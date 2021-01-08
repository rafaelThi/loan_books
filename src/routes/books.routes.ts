/* eslint-disable array-callback-return */
import { Router } from 'express';
import BooksRepository from '../Repositories/BooksRepository';

const routerBooks = Router();
const booksRepository = new BooksRepository();

routerBooks.post('/register-book', (request, response) => {
  const {
    author, name, language, amount,
  } = request.body;
  const book = booksRepository.createBook({
    author,
    name,
    language,
    amount,
  });

  return response.json(book);
});

// PUTS//

routerBooks.get('/list-all-books', (request, response) => {
  const books = booksRepository.listAllBooks();
  return response.json({ books });
});

routerBooks.get('/list-one-book-name/:name', (request, response) => {
  const { name } = request.params;
  const findBookName = booksRepository.listBookName(name);

  if (findBookName[0]) {
    return response.status(200).json({ findBookName });
  }
  return response.status(400).json({ message: `Livro ${name} não encontrado` });
});
routerBooks.get('/list-one-book-author/:author', (request, response) => {
  const { author } = request.params;
  const findBookAuthor = booksRepository.listBookAuthor(author);
  if (findBookAuthor[0]) {
    return response.status(200).json({ findBookAuthor });
  }
  return response.status(400).json({ message: `Livro do ${author} não encontrado` });
});
routerBooks.get('/list-one-book-language/:language', (request, response) => {
  const { language } = request.params;
  const findBookLanguage = booksRepository.listBookLanguage(language);
  if (findBookLanguage) {
    return response.status(200).json({ findBookLanguage });
  }
  return response.status(400).json({ message: `Livro do ${language} não encontrado` });
});

routerBooks.delete('/delete-book', (request, response) => {
  const { id } = request.body;
  booksRepository.deleteBook(id);
  return response.send();
});
// rever esse Delete

export default routerBooks;
