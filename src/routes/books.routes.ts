/* eslint-disable array-callback-return */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import authAdminMiddle from '../middleware/authAdminMiddle';
import BooksRepository from '../Repositories/BooksRepository';

const routerBooks = Router();

routerBooks.post('/register-book/:id', async (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);
  const {
    author, name, language, img,
  } = request.body;

  const book = await booksRepository.create({
    author,
    name,
    language,
    img,
    owner_id: request.params.id,
  });

  await booksRepository.save(book);
  //
  return response.json({ book });
});

// PUTS//

// routerBooks.use(authUser);

routerBooks.get('/list-book-id/:id', async (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);
  const { id } = request.params;
  const books = await booksRepository.findOne(id);
  return response.json({ books });
});

routerBooks.get('/list-all-books', async (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);
  const books = await booksRepository.find();
  return response.json({ books });
});

routerBooks.get('/list-one-book-name/:name', async (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);
  const { name } = request.params;
  const findBookName = await booksRepository.listBookName(name);

  if (findBookName[0]) {
    return response.status(200).json({ findBookName });
  }
  return response.status(400).json({ message: `Livro ${name} não encontrado` });
});

routerBooks.get('/list-one-book-author/:author', async (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);
  const { author } = request.params;
  const findBookAuthor = await booksRepository.listBookAuthor(author);
  if (findBookAuthor[0]) {
    return response.status(200).json({ findBookAuthor });
  }
  return response.status(400).json({ message: `Livro do ${author} não encontrado` });
});

routerBooks.get('/list-one-book-language/:language', async (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);
  const { language } = request.params;
  const findBookLanguage = await booksRepository.listBookLanguage(language);
  if (findBookLanguage) {
    return response.status(200).json({ findBookLanguage });
  }
  return response.status(400).json({ message: `Livro do ${language} não encontrado` });
});

routerBooks.delete('/delete-book', authAdminMiddle, (request, response) => {
  const booksRepository = getCustomRepository(BooksRepository);
  const { id } = request.body;
  booksRepository.deleteBook(id);
  return response.send();
});
// rever esse Delete

export default routerBooks;
