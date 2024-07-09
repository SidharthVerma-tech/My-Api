import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controller/user.controller.js';

const userRouter = express.Router();

userRouter
    .route('/')
    .get(getUsers)    // Use getUsers for GET requests to '/'
    .post(createUser); // Use createUser for POST requests to '/'

userRouter
    .route('/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser)
     // Use getUserById for GET requests to '/:id'

export default userRouter;
