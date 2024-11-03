import express from 'express';
import TaskController from '../controllers/taskController.js';

const routes = express.Router();

routes.get('/task/user', TaskController.getTaskByUser); //pega as tasks por id de usuário
routes.post('/task', TaskController.criarTask); //cria a task por id de usuário
// routes.put('/task/:id', TaskController.atualizarTask);
// routes.delete('/task/:id', TaskController.excluirTask);

export default routes;