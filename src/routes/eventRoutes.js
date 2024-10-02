import express from 'express';
import EventController from '../controllers/eventController.js';

const routes = express.Router();

routes.get('/event', EventController.getEvent);
routes.get('/event/:id', EventController.getEventPorId);
routes.post('/event', EventController.criarEvent);
routes.put('/event/:id', EventController.atualizarEvent);
routes.delete('/event/:id', EventController.excluirEvent);

export default routes;