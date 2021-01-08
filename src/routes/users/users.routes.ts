import { Router } from 'express';
import UserRepository from '../../Repositories/UsersRepository';

const routerUser = Router();
const userRepository = new UserRepository();

routerUser.get('/list-all-users', (request, response) => {
  const users = userRepository.listAllUsers();
  return response.json({ users });
});
routerUser.post('/create-user', (request, response) => {
  const { fullName, email, password } = request.body;
  const findEmail = userRepository.findByEmailUser(email);
  if (!findEmail) {
    const user = userRepository.createUser(fullName, email, password);
    return response.json({ user });
  }
  return response.status(400).json({ message: `Email:${email} já cadastrado` });
});

export default routerUser;
