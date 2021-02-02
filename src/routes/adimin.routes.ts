import { hash } from 'bcryptjs';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AdminRepository from '../Repositories/AdminRepository';
import CreateAdminService from '../services/CreateAdminService';

const routerAdmin = Router();

routerAdmin.get('/list-owner/:id', async (request, response) => {
  const adminRepository = getCustomRepository(AdminRepository);
  const { id } = request.params;
  const idOwner = await adminRepository.findOne(id);
  delete idOwner?.passwordAdmin;
  return response.json({ idOwner });
});

routerAdmin.get('/list-owner/:email', async (request, response) => {
  const adminRepository = getCustomRepository(AdminRepository);
  const { email } = request.params;
  const idOwner = await adminRepository.findOne(email);
  console.log(idOwner);
  return response.json(idOwner?.id);
});

routerAdmin.get('/list-all-owners', async (request, response) => {
  const adminRepository = getCustomRepository(AdminRepository);
  const admins = await adminRepository.find();
  return response.json({ admins });
});

routerAdmin.post('/create-owners', async (request, response) => {
  try {
    const { fullNameAdmin, emailAdmin, passwordAdmin } = request.body;
    const createAdmin = new CreateAdminService();

    const admin = await createAdmin.execute({
      fullNameAdmin,
      emailAdmin,
      passwordAdmin,
    });
    return response.json({ admin });
  } catch (err) {
    return response.status(400).json({ message: `${err}` });
  }
});

routerAdmin.put('/reset-password-admin/:id', async (request, response) => {
  try {
    const resetPasswordAdmin = getCustomRepository(AdminRepository);
    const { id } = request.params;
    const data = request.body;
    const passwordAdmin = await hash(data.password, 8);
    const resetPassword = await resetPasswordAdmin.update({ id }, { passwordAdmin });

    return response.json(resetPassword);
  } catch (error) {
    throw new Error(error);
  }
});

export default routerAdmin;
