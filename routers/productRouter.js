import { Router } from 'express';


import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/products.js';

const ProductRouter = Router();

ProductRouter.post('/products', createProduct);
ProductRouter.get('/products', getProducts);
ProductRouter.get('/products/:id', getProductById);
ProductRouter.put('/products/:id', updateProduct);
ProductRouter.delete('/products/:id', deleteProduct);

export default ProductRouter;