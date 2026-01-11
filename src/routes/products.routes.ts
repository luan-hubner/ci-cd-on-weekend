import { createProductController } from '@src/application/use-cases/products/create-product';
import { adaptRoute } from '@src/http/adapters/express-route.adapter';
import { Router } from 'express';

const productsRoutes = Router();

productsRoutes.get('/', adaptRoute(createProductController));

export { productsRoutes };
