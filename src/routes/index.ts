import { Router } from 'express';
import routerBooks from './books.routes';
import routerAdmin from './adimin.routes';
import routerUser from './users.routes';

const routes = Router();

routes.use('/requisition-book', routerBooks);

routes.use('/users', routerUser);

routes.use('/users-book-owners', routerAdmin);

export default routes;
