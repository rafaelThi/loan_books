import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import TokenAdminRepository from '../Repositories/TokenAdminRepository';

const tokenAdmin = Router();

tokenAdmin.get('/token321/:token', async (request, response) => {
  try {
    const userRepoAdmin = getCustomRepository(TokenAdminRepository);
    const { userToken } = request.params;
    const matchToken = await userRepoAdmin.findOne(userToken);
    delete matchToken?.IdAdmin.passwordAdmin;
    return response.json({ matchToken });
  } catch (err) {
    return response.json(err);
  }
});

tokenAdmin.delete('/delete-token321/:id_admin', async (request, response) => {
  const userRepo = getCustomRepository(TokenAdminRepository);
  const adminId = request.params;
  const matchToken = await userRepo.delete(adminId);
  return response.json({ matchToken });
});

export default tokenAdmin;
