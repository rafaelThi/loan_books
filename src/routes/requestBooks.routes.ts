import { Router } from 'express';
import { getRepository } from 'typeorm';
import RequestBook from '../models/RequestBook';

const routerRequestBooks = Router();

routerRequestBooks.post('/request-book', async (request, response) => {
  const { id_book, id_user, id_admin } = request.body;
  const requestBookRepository = getRepository(RequestBook);
  const requestBook = await requestBookRepository.create({
    id_book,
    id_user,
    id_admin,
  });

  await requestBookRepository.save(requestBook);

  return response.json({ requestBook });
});

routerRequestBooks.get('/all-requests-books', async (request, response) => {
  const requestBookRepository = getRepository(RequestBook);
  const allRequestsBooks = await requestBookRepository.find();
  return response.json({ allRequestsBooks });
});

export default routerRequestBooks;
