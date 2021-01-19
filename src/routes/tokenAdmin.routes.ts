import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import TokenAdminRepository from '../Repositories/TokenAdminRepository';

const tokenAdmin = Router();

tokenAdmin.get('/token321/:token', async (request, response) => {
  const userRepoAdmin = getCustomRepository(TokenAdminRepository);
  const userToken = request.params;
  const matchToken = await userRepoAdmin.findOne(userToken);
  return response.json({ matchToken });
});

export default tokenAdmin;
