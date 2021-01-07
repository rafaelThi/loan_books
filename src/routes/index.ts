import { Router } from 'express';
import routerBooks from './books/books.routes';
import routerAdmin from './admin/adimin.routes';
import routerUser from './users/users.routes';

const routes = Router();

routes.use('/requisition-book', routerBooks);

routes.use('/users', routerUser);

routes.use('/users-book-owners', routerAdmin);

export default routes;
