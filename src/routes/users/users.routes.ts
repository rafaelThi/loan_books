import { Router } from 'express';
import {uuid} from 'uuidv4'

const routerUser = Router();

interface IUser {
  id: string;
  fullName: string;
  email: string;
  senha: string;
}

const users:any = [];

routerUser.get('/list-all', (request, response) => {
  return response.json({users})
})

routerUser.post('/create', (request, response) =>{
  const { fullName, email, senha } = request.body;
  const user:IUser = { id:uuid(), fullName, email, senha };
  users.push(user)
  return response.json({user})
})

export default routerUser;
