import express from 'express';
import EventController from '../controllers/eventController.js';

const routes = express.Router();

routes.get('/event/user', EventController.getEventByUser);
routes.post('/event', EventController.criarEvent);

export default routes;