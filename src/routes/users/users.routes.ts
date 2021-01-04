import { Router } from 'express';
import { uuid } from 'uuidv4';

const routerUser = Router();

interface IUser {
  id: string;
  fullName: string;
  email: string;
  senha: string;
}

const users:any = [];

routerUser.get('/list-all-users', (request, response) => response.json({ users }));

routerUser.post('/create-user', (request, response) => {
  const { fullName, email, senha } = request.body;
  const findEmail = users.find((user:IUser) => user.email === email);
  if (!findEmail) {
    const user:IUser = {
      id: uuid(), fullName, email, senha,
    };
    users.push(user);
    return response.json({ user });
  }
  return response.status(400).json({ message: `Email:${email} já cadastrado` });
});

export default routerUser;
