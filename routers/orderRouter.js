import {Router} from 'express';
import { createorder,getOrderById,updateOrder,getOrders,deleteOrder } from '../controllers/orders.js';
import validateSchema  from '../middlewares/validateSchema.js';
import orderSchema from '../schemas/orderSchema.js';
const orderRouter = Router();


orderRouter.get('/', getOrders);
orderRouter.post('/',validateSchema(orderSchema), createorder);
orderRouter.get('/:id', getOrderById);
orderRouter.put('/:id',validateSchema(orderSchema), updateOrder);
orderRouter.delete('/:id', deleteOrder);


export default orderRouter;