import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import TokenUserRepository from '../Repositories/TokenUserRepository';

const tokenUser = Router();

tokenUser.get('/token/:id', async (request, response) => {
  const userRepo = getCustomRepository(TokenUserRepository);
  const userToken = request.params;
  const matchToken = await userRepo.findOne(userToken);
  return response.json({ matchToken });
});

export default tokenUser;
