import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import User from '../models/User';
import UserRepository from '../Repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const routerUser = Router();

routerUser.get('/list-all-users', async (request, response) => {
  const userRepo = getCustomRepository(UserRepository);
  const users = await userRepo.find();
  return response.json({ users });
});

routerUser.get('/list-user-email/:email', async (request, response) => {
  const { email } = request.params;
  const userRepo = getRepository(User);
  const user = await userRepo.findOne({
    where: { email },
  });
  delete user?.password;
  return response.json({ user });
});

routerUser.get('/list-user-id/:id', async (request, response) => {
  const { id } = request.params;
  const userRepo = getRepository(User);
  const user = await userRepo.findOne({
    where: { id },
  });
  return response.json({ user });
});

routerUser.post('/create-user', async (request, response) => {
  try {
    const { fullName, email, password } = request.body;
    const createUser = new CreateUserService();
    const user = await createUser.execute({
      fullName,
      email,
      password,
    });
    return response.status(200).json({ user });
  } catch (err) {
    return response.status(400).json({ message: `${err}` });
  }
});

export default routerUser;
