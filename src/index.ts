import './utils/module.alias';
import express from 'express';
import { productsRoutes } from './routes/products.routes';

export const app = express();

app.use(express.json());
app.use('/products', productsRoutes);

export function startServer(port = 3333) {
  return app.listen(port, () => {
    console.log(`server is running on port ${port}. enjoy! 🚀`);
  });
}

if (require.main === module) {
  startServer();
}
