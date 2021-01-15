import { Router } from 'express';
import { getRepository } from 'typeorm';
import RequestBook from '../models/RequestBook';
import authUser from '../middleware/authUser';

const routerRequestBooks = Router();

routerRequestBooks.use(authUser);

routerRequestBooks.post('/request-book/:id', async (request, response) => {
  console.log(request.user);
  const { id } = request.params;
  const { id_admin } = request.body;
  const requestBookRepository = getRepository(RequestBook);

  const id_user = request.user.id;
  // const id_admin = request.admin.id;

  const requestBook = await requestBookRepository.create({
    id_book: id,
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
