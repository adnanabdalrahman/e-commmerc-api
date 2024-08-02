import { Router } from 'express';
import { createOrder, getOrderById, updateOrder, getOrders, deleteOrder } from '../controllers/orderController.js';
import validateSchema from '../middlewares/validateSchema.js';
import orderSchema from '../schemas/orderSchema.js';
const OrderRouter = Router();

OrderRouter.get('/', getOrders);
OrderRouter.post('/', validateSchema(orderSchema), createOrder);
OrderRouter.get('/:id', getOrderById);
OrderRouter.put('/:id', validateSchema(orderSchema), updateOrder);
OrderRouter.delete('/:id', deleteOrder);


export default OrderRouter;