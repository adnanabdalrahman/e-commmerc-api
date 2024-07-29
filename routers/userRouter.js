import { Router } from 'express';



const UserRouter = Router();

UserRouter.route('/').get(() => console.log('hello'));


export default UserRouter;



