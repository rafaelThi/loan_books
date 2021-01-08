import { Router } from 'express';
import AdminRepository from '../Repositories/AdminRepository';
import CreateAdminService from '../services/CreateAdminService';

const routerAdmin = Router();
const adminRepository = new AdminRepository();

routerAdmin.get('/list-all-owners', (request, response) => {
  const admins = adminRepository.listAll();
  return response.json({ admins });
});

routerAdmin.post('/create-owners', (request, response) => {
  const { fullNameAdmin, emailAdmin, passwordAdmin } = request.body;
  const createAdmin = new CreateAdminService(adminRepository);

  const admin = createAdmin.execute({
    fullNameAdmin,
    emailAdmin,
    passwordAdmin,
  });
  return response.json({ admin });
});

export default routerAdmin;
