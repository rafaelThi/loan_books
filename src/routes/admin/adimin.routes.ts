import { Router } from 'express';
import Admin from '../../models/Admin';

const routerAdmin = Router();

const adminUser: Admin[] = [];

routerAdmin.get('/list-all-owners', (request, response) => response.json({ adminUser }));

routerAdmin.post('/create-owners', (request, response) => {
  const { fullNameAdmin, emailAdmin, passwordAdmin } = request.body;

  const findEmail = adminUser.find((userOwner: Admin) => userOwner.emailAdmin === emailAdmin);
  if (!findEmail) {
    const userOwner:Admin = new Admin(fullNameAdmin, emailAdmin, passwordAdmin);

    adminUser.push(userOwner);
    return response.json({ userOwner });
  }
  return response.status(400).json({ message: `Email:${emailAdmin} já cadastrado` });
});

export default routerAdmin;
