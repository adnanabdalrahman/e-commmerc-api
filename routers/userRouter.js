import { Router } from 'express';
import validateSchema from '../middlewares/validateSchema.js';
import userSchema from '../schemas/userSchemas.js';
import { createUser, getUserById, updateUser, getUsers, deleteUser } from '../controllers/users.js';

const UserRouter = Router();

UserRouter.get('/', getUsers);
UserRouter.post('/', validateSchema(userSchema), createUser);
UserRouter.get('/:id', getUserById);
UserRouter.put('/:id', validateSchema(userSchema), updateUser);
UserRouter.delete('/:id', deleteUser);

export default UserRouter;



