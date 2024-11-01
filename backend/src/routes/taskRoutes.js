import express from 'express';
import TaskController from '../controllers/taskController.js';

const routes = express.Router();

routes.get('/task/user', TaskController.getTaskByUser); //pega as tasks por id de usuário
routes.post('/task', TaskController.criarTask); //cria a task por id de usuário

export default routes;