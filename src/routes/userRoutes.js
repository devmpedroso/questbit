import express from 'express';
import UserController from '../controllers/userController.js';

const routes = express.Router();

routes.get('/user', UserController.getUser);
routes.get('/user/:id', UserController.getUserPorId);
routes.post('/user', UserController.criarUser);
routes.put('/user/:id', UserController.atualizarUser);
routes.delete('/user/:id', UserController.excluirUser);

export default routes;