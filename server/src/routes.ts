import { Router } from 'express'
import ApiController from './controllers/ApiController';

const routes = Router();

routes.get('/data', ApiController.content)

export default routes;