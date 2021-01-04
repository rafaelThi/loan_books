import { Router } from 'express';
import { uuid } from 'uuidv4';

const bookOwnersRoutes = Router();

interface IBooks {
  id: string;
  author: string;
  name: string;
  amount: number;
}

const books:any = [];

bookOwnersRoutes.post('/register', (request, response) => {
  const { author, name, amount } = request.body;
  const book:IBooks = {
    id: uuid(), author, name, amount,
  };
  books.push(book);

  return response.json(book);
});

bookOwnersRoutes.get('/list', (request, response) => response.json({ books }));

bookOwnersRoutes.get('/list-one', (request, response) => response.json(books[2]));

export default bookOwnersRoutes;
