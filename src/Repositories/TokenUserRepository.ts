import { EntityRepository, Repository } from 'typeorm';
import TokenUser from '../models/TokenUser';

@EntityRepository(TokenUser)
class UserTokenRepository extends Repository<TokenUser> {
  public async findByToken(token: string): Promise<TokenUser | undefined> {
    const userToken = await this.findOne({
      where: { token },
    });
    return userToken || undefined;
  }

  public async generate(id_user: string): Promise<TokenUser> {
    const userToken = this.create({
      id_user,
    });
    // criando a instancia da classe, por isso não precisa do await aqui
    await this.save(userToken);
    // usar o await aqui pq aqui ocorre o salvamento no banco

    return userToken;
  }
}

export default UserTokenRepository;
