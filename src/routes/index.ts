import { Router } from "express";
import bookOwnersRoutes from "./bookOwners/bookOwners.routes";
import routerUser from "./users/users.routes";

const routes = Router()

routes.use('/requisition-book', bookOwnersRoutes);

routes.use('/users', routerUser);

export default routes;
