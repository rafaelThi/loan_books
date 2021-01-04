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

bookOwnersRoutes.get('/list-one-book', (request, response) => {
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

export default bookOwnersRoutes;
