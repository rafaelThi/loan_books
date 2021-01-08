import { Router } from 'express';
import AdminRepository from '../../Repositories/AdminRepository';

const routerAdmin = Router();
const adminRepository = new AdminRepository();

routerAdmin.get('/list-all-owners', (request, response) => {
  const admins = adminRepository.listAll();
  return response.json({ admins });
});

routerAdmin.post('/create-owners', (request, response) => {
  const { fullNameAdmin, emailAdmin, passwordAdmin } = request.body;

  const findEmail = adminRepository.findByEmailAdmin(emailAdmin);
  if (!findEmail) {
    const userAdmin = adminRepository.createAdmin(fullNameAdmin, emailAdmin, passwordAdmin);
    return response.status(200).json({ userAdmin });
  }
  return response.status(400).json({ message: `Email:${emailAdmin} já cadastrado` });
});

export default routerAdmin;
