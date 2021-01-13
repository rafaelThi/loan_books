import { Router } from 'express';
import routerBooks from './books.routes';
import routerAdmin from './adimin.routes';
import routerUser from './users.routes';
import routerRequestBooks from './requestBooks.routes';
import routerSessionUser from './sessionUser.routes';
import routerSessionAdmin from './sessionAdmin.routes';

const routes = Router();

routes.use('/requisition-book', routerBooks);

routes.use('/users', routerUser);

routes.use('/users-book-owners', routerAdmin);

routes.use('/requests', routerRequestBooks);

routes.use('/session-users', routerSessionUser);

routes.use('/session-admin', routerSessionAdmin);

export default routes;
