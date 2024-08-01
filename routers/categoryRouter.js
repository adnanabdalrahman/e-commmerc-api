import { Router } from 'express';


import {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} from '../controllers/categories';

const CategoryRouter = Router();

CategoryRouter.post('/categories', createCategory);
CategoryRouter.get('/categories', getCategories);
CategoryRouter.get('/categories/:id', getCategoryById);
CategoryRouter.put('/categories/:id', updateCategory);
CategoryRouter.delete('/categories/:id', deleteCategory);

export default CategoryRouter;