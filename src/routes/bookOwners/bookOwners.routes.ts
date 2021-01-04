import { Router } from 'express';
import { uuid } from 'uuidv4';

const bookOwnersRoutes = Router();

interface IBooks {
  id: string;
  author: string;
  name: string;
  amount: number;
}

const books: any[] = [];

bookOwnersRoutes.post('/register-book', (request, response) => {
  const { author, name, amount } = request.body;
  const book:IBooks = {
    id: uuid(), author, name, amount,
  };
  books.push(book);

  return response.json(book);
});

bookOwnersRoutes.get('/list-all-books', (request, response) => response.json({ books }));

bookOwnersRoutes.get('/list-one-book/:name', (request, response) => {
  const { name } = request.params;
  const findBook = books.find((book) => book.name === name);
  if (findBook) {
    return response.status(400).json(findBook);
  }
  return response.status(400).json({ message: `Livro ${name} não encontrado` });
});

export default bookOwnersRoutes;
