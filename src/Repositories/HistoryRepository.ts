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

  public async listAll(id_admin: string): Promise<History[]> {
    const allHistory = await this.find({
      where: { id_admin },
    });
    return allHistory;
  }

  public async createHistory(
    id_request_accept: string,
    id_request: string,
    name_book: string,
    id_book: string,
    name_user: string,
    id_user: string,
    id_admin: string,
    created_at: string,
    message: string,
    delivered: string,
  ): Promise<History> {
    const history = await this.create(
      {
        id_request_accept,
        id_request,
        name_book,
        id_book,
        name_user,
        id_user,
        id_admin,
        created_at,
        message,
        delivered,
      },
    );
    await this.save(history);
    return history;
  }
}

export default BooksRepository;
