import { Router } from 'express';
import { getRepository } from 'typeorm';
import RequestBook from '../models/RequestBook';
import authUser from '../middleware/authUser';

const routerRequestBooks = Router();

routerRequestBooks.use(authUser);

routerRequestBooks.post('/request-book', async (request, response) => {
  console.log(request.user);
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
  console.log(request.user);
  const requestBookRepository = getRepository(RequestBook);
  const allRequestsBooks = await requestBookRepository.find();
  return response.json({ allRequestsBooks });
});

export default routerRequestBooks;
