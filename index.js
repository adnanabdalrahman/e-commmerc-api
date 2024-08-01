import './db/index.js';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import usersRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import './models/Index.js';
const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/users', usersRouter);
app.use('/orders', orderRouter);

app.use('*', (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
