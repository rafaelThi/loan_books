import Admin from '../models/Admin';
import AdminRepository from '../Repositories/AdminRepository';

interface IAdminRequest {
  fullNameAdmin: string;
  emailAdmin: string;
  passwordAdmin: string;
}

class CreateAdminService {
  private adminRepository: AdminRepository;

  constructor(adminRepository: AdminRepository) {
    this.adminRepository = adminRepository;
  }

  public execute({ fullNameAdmin, emailAdmin, passwordAdmin }: IAdminRequest): Admin {
    const findEmail = this.adminRepository.findByEmailAdmin(emailAdmin);
    if (findEmail) {
      throw new Error(`Email: "${emailAdmin}" já cadastrado`);
    }
    const userAdmin = this.adminRepository.createAdmin({
      fullNameAdmin,
      emailAdmin,
      passwordAdmin,
    });
    return userAdmin;
  }
}

export default CreateAdminService;
