import { Router } from 'express';
import { getRepository } from 'typeorm';
import RequestBook from '../models/RequestBook';

const routerRequestBooks = Router();

routerRequestBooks.post('/request-book', async (request, response) => {
  const { nameBook, id_user, id_admin } = request.body;
  const requestBookRepository = getRepository(RequestBook);
  const requestBook = await requestBookRepository.create({
    nameBook,
    id_user,
    id_admin,
  });
  return response.send(200).json({ requestBook });
});

routerRequestBooks.get('/all-requests-books', (request, response) => {
  const requestBookRepository = getRepository(RequestBook);
  const allRequestsBooks = requestBookRepository.find();
  return response.send(200).json({ allRequestsBooks });
});

export default routerRequestBooks;
