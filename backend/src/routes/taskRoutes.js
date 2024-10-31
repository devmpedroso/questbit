import express from 'express';
import TaskController from '../controllers/taskController.js';

const routes = express.Router();

routes.get('/task', TaskController.getTask);
routes.get('/task/user', TaskController.getTaskByUser);
// routes.get('/task/:id', TaskController.getTaskPorId);
routes.post('/task', TaskController.criarTask);
// routes.put('/task/:id', TaskController.atualizarTask);
// routes.delete('/task/:id', TaskController.excluirTask);

export default routes;