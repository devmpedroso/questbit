import express from 'express';
import EventController from '../controllers/eventController.js';

const routes = express.Router();

routes.get('/event', EventController.getEventPorId);
routes.post('/event', EventController.criarEvent);

export default routes;