import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../Repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const routerUser = Router();

routerUser.get('/list-all-users', async (request, response) => {
  const userRepo = getCustomRepository(UserRepository);
  const users = await userRepo.find();
  return response.json({ users });
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
