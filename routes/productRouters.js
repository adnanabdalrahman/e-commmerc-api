import { Router } from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import productSchema from '../schemas/productSchema.js';

import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js';

const ProductRouter = Router();

ProductRouter.post('/', validateSchema(productSchema), createProduct);
ProductRouter.get('/', getProducts);
ProductRouter.get('/:id', getProductById);
ProductRouter.put('/:id', validateSchema(productSchema), updateProduct);
ProductRouter.delete('/:id', deleteProduct);

export default ProductRouter;