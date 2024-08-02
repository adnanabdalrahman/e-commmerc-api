import { Router } from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import categorySchema from '../schemas/categorySchema.js';

import {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} from '../controllers/categorieController.js';

const CategoryRouter = Router();

CategoryRouter.post('/', validateSchema(categorySchema), createCategory);
CategoryRouter.get('/', getCategories);
CategoryRouter.get('/:id', getCategoryById);
CategoryRouter.put('/:id', validateSchema(categorySchema), updateCategory);
CategoryRouter.delete('/:id', deleteCategory);

export default CategoryRouter;