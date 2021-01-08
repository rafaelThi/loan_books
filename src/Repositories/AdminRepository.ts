import Admin from '../models/Admin';

interface IAdmin {
  fullNameAdmin: string;
  emailAdmin: string;
  passwordAdmin: string;
}

class AdminRepository {
  private adminUser: Admin[];

  constructor() {
    this.adminUser = [];
  }

  public listAll(): Admin[] {
    return this.adminUser;
  }

  public findByEmailAdmin(emailAdmin: string): Admin | undefined {
    const findEmail = this.adminUser.find((admin) => admin.emailAdmin === emailAdmin);
    return findEmail;
  }

  public createAdmin({ fullNameAdmin, emailAdmin, passwordAdmin }: IAdmin):Admin {
    const admin:Admin = new Admin(fullNameAdmin, emailAdmin, passwordAdmin);
    this.adminUser.push(admin);
    return admin;
  }
}

export default AdminRepository;
