import { Router } from 'express';
import { uuid } from 'uuidv4';

const routerUserBookOwners = Router();

interface IUserOwners {
  id: string;
  fullName: string;
  email: string;
  senha: string;
}

const usersOwners: any = [];

routerUserBookOwners.get('/list-all-owners', (request, response) => response.json({ usersOwners }));

routerUserBookOwners.post('/create-owners', (request, response) => {
  const { fullName, email, senha } = request.body;

  const findEmail = usersOwners.find((userOwner: IUserOwners) => userOwner.email === email);
  if (!findEmail) {
    const userOwner:IUserOwners = {
      id: uuid(), fullName, email, senha,
    };
    usersOwners.push(userOwner);
    return response.json({ userOwner });
  }
  return response.status(400).json({ message: `Email:${email} já cadastrado` });
});

export default routerUserBookOwners;
