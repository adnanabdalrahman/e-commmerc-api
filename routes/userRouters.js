import { Router } from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import userSchema from '../schemas/userSchema.js';

import { createUser, getUserById, updateUser, getUsers, deleteUser } from '../controllers/userController.js';

const UserRouter = Router();

UserRouter.get('/', getUsers);
UserRouter.post('/', validateSchema(userSchema), createUser);
UserRouter.get('/:id', getUserById);
UserRouter.put('/:id', validateSchema(userSchema), updateUser);
UserRouter.delete('/:id', deleteUser);

export default UserRouter;



