import { Router } from 'express';
import { getRepository } from 'typeorm';
import RequestBook from '../models/RequestBook';
// import authUser from '../middleware/authUser';

const routerRequestBooks = Router();

// routerRequestBooks.use(authUser);
routerRequestBooks.post('/request-book/:id', async (req, response) => {
  console.log(req.user.id);
  const { id } = req.params;
  const { id_admin, id_user } = req.body;
  const requestBookRepository = getRepository(RequestBook);

  const requestBook = await requestBookRepository.create({
    id_book: id,
    id_user,
    id_admin,
  });

  await requestBookRepository.save(requestBook);

  return response.json({ requestBook });
});

routerRequestBooks.get('/all-requests-books', async (req, response) => {
  console.log(userId);
  const requestBookRepository = getRepository(RequestBook);
  const allRequestsBooks = await requestBookRepository.find();
  return response.json({ allRequestsBooks });
});

export default routerRequestBooks;
