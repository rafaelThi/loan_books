import { Router } from 'express';
import User from '../../models/User';

const routerUser = Router();

const users:any = [];

routerUser.get('/list-all-users', (request, response) => response.json({ users }));

routerUser.post('/create-user', (request, response) => {
  const { fullName, email, password } = request.body;
  const findEmail = users.find((user:User) => user.email === email);
  if (!findEmail) {
    const user = new User(fullName, email, password);
    users.push(user);
    return response.json({ user });
  }
  return response.status(400).json({ message: `Email:${email} já cadastrado` });
});

export default routerUser;
