import { EntityRepository, Repository } from 'typeorm';
import Admin from '../models/Admin';

@EntityRepository(Admin)
class AdminRepository extends Repository<Admin> {
  public async findByEmailAdmin(emailAdmin: string): Promise<Admin | null> {
    const findEmail = await this.findOne({
      where: { emailAdmin },
    });
    return findEmail || null;
  }
}
export default AdminRepository;
