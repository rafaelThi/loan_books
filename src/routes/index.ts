import { Router } from 'express';
import routerBooks from './books.routes';
import routerAdmin from './adimin.routes';
import routerUser from './users.routes';
import routerRequestBooks from './requestBooks.routes';
import routerSessionUser from './sessionUser.routes';
import routerSessionAdmin from './sessionAdmin.routes';
import tokenUser from './tokenUser.routes';
import tokenAdmin from './tokenAdmin.routes';
import mailProvider from './mailProvider.routes';
import historyAccept from './history.routes';

const routes = Router();

routes.use('/requisition-book', routerBooks);

routes.use('/users', routerUser);

routes.use('/users-book-owners', routerAdmin);

routes.use('/requests', routerRequestBooks);

routes.use('/session-users', routerSessionUser);

routes.use('/session-admin', routerSessionAdmin);

routes.use('/users-token', tokenUser);

routes.use('/admin-token', tokenAdmin);

routes.use('/mail-provider', mailProvider);

routes.use('/history', historyAccept);

export default routes;
