import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async findByEmailUser(email: string): Promise<User | null> {
    const findEmail = await this.findOne({
      where: { email },
    });
    return findEmail || null;
  }
}
export default UserRepository;
