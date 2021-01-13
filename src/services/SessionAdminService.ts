import { compare } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import authAdmin from '../config/authAdmin';
import Admin from '../models/Admin';

interface ISessionAdmin {
  emailAdmin: string;
  passwordAdmin: string;
}

interface IAdminAuth {
  admin: Admin;
  token: string;
}

class SessionAdmin {
  public async execute({ emailAdmin, passwordAdmin }: ISessionAdmin): Promise<IAdminAuth> {
    const adminRepo = getRepository(Admin);

    const admin = await adminRepo.findOne({
      where: { emailAdmin },
    });
    if (!admin) {
      throw new Error('Dados incorretos');
    }
    const matchPassAdmin = await compare(passwordAdmin, admin.passwordAdmin);
    if (!matchPassAdmin) {
      throw new Error('Dados incorretos');
    }
    const token = sign({}, authAdmin.jwt.secret, {
      subject: admin.id,
      expiresIn: authAdmin.jwt.expiresIn,
    });
    return ({
      admin,
      token,
    });
  }
}
export default SessionAdmin;
