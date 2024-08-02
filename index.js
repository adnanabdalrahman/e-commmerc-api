import './db/index.js';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import UserRouter from './routes/userRouters.js';
import OrderRouter from './routes/orderRouters.js';
import ProductRouter from './routes/productRouters.js';
import CategoryRouter from './routes/categoryRouters.js';


import './models/Index.js';
const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/users', UserRouter);
app.use('/orders', OrderRouter);
app.use('/categories', CategoryRouter);
app.use('/products', ProductRouter);
app.use('*', (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
