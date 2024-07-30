import { Router } from 'express';

import { createUser,getUserById,updateUser,getUsers,deleteUser} from '../controllers/users.js';

const UserRouter = Router();

UserRouter.get('/', getUsers);
UserRouter.post('/', createUser);
UserRouter.get('/:id', getUserById);
UserRouter.put('/:id',updateUser);
UserRouter.delete('/:id',deleteUser);

export default UserRouter;



