import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import TokenUserRepository from '../../Repositories/TokenUserRepository';

const routerToken = Router();

routerToken.get('/token/:token', async (request, response) => {
  const userRepo = getCustomRepository(TokenUserRepository);
  const userToken = request.params;
  const matchToken = await userRepo.findOne(userToken);
  return response.json({ matchToken });
});

export default routerToken;
