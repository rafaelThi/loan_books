/* eslint-disable consistent-return */
import { EntityRepository, Repository } from 'typeorm';
import RequestBook from '../models/RequestBook';

@EntityRepository(RequestBook)
class RequestBookRepository extends Repository<RequestBook> {
  // public async findIdUser(id: string): Promise<any> {
  //   const userId = request.user.id;
  //   if (await id === userId) {
  //     console.log(id);
  //     console.log(userId);
  //     return userId;
  //   }
  // }
}

export default RequestBookRepository;
