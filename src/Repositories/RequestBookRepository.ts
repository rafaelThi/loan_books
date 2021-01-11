import { EntityRepository, Repository } from 'typeorm';
import RequestBook from '../models/RequestBook';

@EntityRepository(RequestBook)
class RequestBookRepository extends Repository<RequestBook> {

}

export default RequestBookRepository;
