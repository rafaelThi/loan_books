/* eslint-disable array-callback-return */
import { Router } from 'express';
import { getRepository } from 'typeorm';
import HistoryRequest from '../models/HistoryRequest';

const historyAccept = Router();

historyAccept.post('/history-accepts', async (request, response) => {
  const historyRepo = getRepository(HistoryRequest);
  const {
    id_request_accept, id_request, id_book, id_user, id_admin, created_at,
    message, delivered,
  } = request.body;

  const history = await historyRepo.create({
    id_request_accept,
    id_request,
    id_book,
    id_user,
    id_admin,
    created_at,
    message,
    delivered,
  });

  await historyRepo.save(history);
  return response.json({ history });
});

historyAccept.get('/history-accepts/:id_admin', async (request, response) => {
  const historyRepo = getRepository(HistoryRequest);
  const { id } = request.params;
  const history_accept = await historyRepo.findOne(id);
  return response.json({ history_accept });
});

export default historyAccept;
