import express, { Request, Response } from 'express';
import cors from 'cors';
import { productRouter } from './app/modules/products/product.route';
import { orderRouter } from './app/modules/orders/order.route';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});
export default app;
