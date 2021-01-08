import { Router } from 'express';
import UserRepository from '../Repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const routerUser = Router();
const userRepository = new UserRepository();

routerUser.get('/list-all-users', (request, response) => {
  const users = userRepository.listAllUsers();
  return response.json({ users });
});
routerUser.post('/create-user', (request, response) => {
  const { fullName, email, password } = request.body;

  const createUser = new CreateUserService(userRepository);
  const user = createUser.execute({
    fullName,
    email,
    password,
  });
  return response.json({ user });
});

export default routerUser;
