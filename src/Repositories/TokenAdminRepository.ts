import { EntityRepository, Repository } from 'typeorm';
import TokenAdmin from '../models/TokenAdmin';

@EntityRepository(TokenAdmin)
class AdminTokenRepository extends Repository<TokenAdmin> {
  public async findByToken(token: string): Promise<TokenAdmin | undefined> {
    const AdminToken = await this.findOne({
      where: { token },
    });
    return AdminToken || undefined;
  }

  public async generate(id_admin: string): Promise<TokenAdmin> {
    const AdminToken = this.create({
      id_admin,
    });
    // criando a instancia da classe, por isso não precisa do await aqui
    await this.save(AdminToken);
    // usar o await aqui pq aqui ocorre o salvamento no banco

    return AdminToken;
  }
}

export default AdminTokenRepository;
