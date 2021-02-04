/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntityRepository, Repository, Like } from 'typeorm';
import History from '../models/HistoryRequest';

@EntityRepository(History)
class BooksRepository extends Repository<History> {
  public async listHistoryBookName(name_book:string, id_admin: string): Promise<History[]> {
    const matchHistoryBooks = await this.find({
      id_admin,
      name_book: Like(`%${name_book}%`),
    });
    return matchHistoryBooks;
  }

  public async listHistoryUserName(name_user:string, id_admin: string): Promise<History[]> {
    const matchHistoryUser = await this.find({
      id_admin,
      name_user: Like(`%${name_user}%`),
    });
    return matchHistoryUser;
  }
}

export default BooksRepository;
