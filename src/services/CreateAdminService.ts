import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Admin from '../models/Admin';
import AdminRepository from '../Repositories/AdminRepository';

interface IAdminRequest {
  fullNameAdmin: string;
  emailAdmin: string;
  passwordAdmin: string;
}

class CreateAdminService {
  public async execute({
    fullNameAdmin,
    emailAdmin,
    passwordAdmin,
  }: IAdminRequest): Promise<Admin> {
    const adminRepo = getCustomRepository(AdminRepository);

    const findEmail = await adminRepo.findByEmailAdmin(emailAdmin);
    if (findEmail) {
      throw new Error(`Email: "${emailAdmin}" já cadastrado`);
    }

    const hashPass = await hash(passwordAdmin, 8);

    const userAdmin = adminRepo.create({
      fullNameAdmin,
      emailAdmin,
      passwordAdmin: hashPass,
    });

    await adminRepo.save(userAdmin);

    delete userAdmin.passwordAdmin;

    return userAdmin;
  }
}

export default CreateAdminService;
