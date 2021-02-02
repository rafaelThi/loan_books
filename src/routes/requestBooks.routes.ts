import { Router } from 'express';
import { getRepository } from 'typeorm';
import RequestBook from '../models/RequestBook';
import RequestsAccept from '../models/RequestAccept';

const routerRequestBooks = Router();

// routerRequestBooks.use(authUser);
routerRequestBooks.post('/request-book/:id', async (request, response) => {
  const { id } = request.params;
  const { id_admin, id_user } = request.body;
  const requestBookRepository = getRepository(RequestBook);

  const requestBook = await requestBookRepository.create({
    id_book: id,
    id_user,
    id_admin,
  });

  await requestBookRepository.save(requestBook);

  return response.json({ requestBook });
});

routerRequestBooks.get('/all-requests-books', async (request, response) => {
  // console.log(userId);
  const requestBookRepository = getRepository(RequestBook);
  const allRequestsBooks = await requestBookRepository.find();
  return response.json({ allRequestsBooks });
});

routerRequestBooks.get('/requests-books/:id_admin', async (request, response) => {
  try {
    const requestBookRepository = getRepository(RequestBook);
    const { id_admin } = request.params;
    const RequestBooksIdAdmin = await requestBookRepository.find({
      where: { id_admin },
    });
    return response.json(RequestBooksIdAdmin);
  } catch (error) {
    alert(error);
    throw new Error(error);
  }
});

routerRequestBooks.delete('/delete-request/:id', async (request, response) => {
  const { id } = request.params;
  const requestBookRepository = getRepository(RequestBook);
  const deleteRequest = await requestBookRepository.delete(id);
  return response.json({ deleteRequest });
});

routerRequestBooks.post('/aceept', async (request, response) => {
  const {
    id_request, id_book, id_user, id_admin, message,
  } = request.body;
  const requestAcceptRepository = getRepository(RequestsAccept);

  const requestAccept = requestAcceptRepository.create({
    id_request,
    id_book,
    id_user,
    id_admin,
    message,
  });

  await requestAcceptRepository.save(requestAccept);

  return response.json({ requestAccept });
});

routerRequestBooks.get('/requests-accept/:id_admin', async (request, response) => {
  try {
    const requestBookRepository = getRepository(RequestsAccept);
    const { id_admin } = request.params;
    const RequestAcceptIdAdmin = await requestBookRepository.find({
      where: { id_admin },
    });
    return response.json(RequestAcceptIdAdmin);
  } catch (error) {
    alert(error);
    throw new Error(error);
  }
});

routerRequestBooks.put('/request-delivered/:id', async (request, response) => {
  try {
    const requestBookRepository = getRepository(RequestsAccept);
    const { id } = request.params;
    const { delivered } = request.body;
    const requestDelivered = await requestBookRepository.update({ id }, { delivered });

    return response.json(requestDelivered);
  } catch (error) {
    throw new Error(error);
  }
});

routerRequestBooks.delete('/delete-request-accept/:id', async (request, response) => {
  const { id } = request.params;
  const requestBookRepository = getRepository(RequestsAccept);
  const deleteRequest = await requestBookRepository.delete(id);
  return response.json({ deleteRequest });
});

routerRequestBooks.get('/get-request-accept/:id', async (request, response) => {
  const { id } = request.params;
  const requestBookRepository = getRepository(RequestsAccept);
  const getRequest = await requestBookRepository.findOne(id);
  return response.json({ getRequest });
});

export default routerRequestBooks;
