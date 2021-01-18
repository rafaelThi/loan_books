import { Router } from 'express';
import SessionUser from '../services/SessionUserService';

const routerSessionUser = Router();

routerSessionUser.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;
    const sessionUser = new SessionUser();
    const createSession = await sessionUser.execute({
      email,
      password,
    });

    delete createSession.user.password;

    return response.json({ createSession });
  } catch (error) {
    return response.json('Erro');
  }
});

export default routerSessionUser;
