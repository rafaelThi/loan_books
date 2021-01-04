import { Router } from 'express';
import routerBooks from './books/books.routes';
import routerUserBookOwners from './userBookOwners/userBookOwners.routes';
import routerUser from './users/users.routes';

const routes = Router();

routes.use('/requisition-book', routerBooks);

routes.use('/users', routerUser);

routes.use('/users-book-owners', routerUserBookOwners);

export default routes;
