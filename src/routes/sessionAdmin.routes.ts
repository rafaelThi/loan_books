import { Router } from 'express';
import SessionAdmin from '../services/SessionAdminService';

const routerSessionAdmin = Router();

interface IResp {
  admin:{
  emailAdmin: string;
  passwordAdmin: string;
  }
  token: string;
}

routerSessionAdmin.post('/', async (request, response) => {
  try {
    const { emailAdmin, passwordAdmin } = request.body;
    const sessionAdmin = new SessionAdmin();

    const createSessionAdmin: IResp = await sessionAdmin.execute({
      emailAdmin,
      passwordAdmin,
    });

    delete createSessionAdmin.admin.passwordAdmin;

    return response.json(createSessionAdmin);
  } catch (error) {
    return response.json('Erro');
  }
});
export default routerSessionAdmin;
