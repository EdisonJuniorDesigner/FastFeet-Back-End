import { Router } from 'express';

import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryStatusController from './app/controllers/DeliveryStatusController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

// Criar um usuário
routes.post('/users', UserController.store);

// Inicar uma sessão
routes.post('/sessions', SessionController.store);

// Listar status das encomendas
routes.get('/deliveryman/deliveries', DeliveryStatusController.index);

// Listar encomendas finalizadas
routes.get('/deliveryman/:id/deliveries', DeliveryStatusController.show);

routes.put(
  '/deliveryman/:deliveryman_id/deliveries/:delivery_id',
  DeliveryStatusController.update
);
routes.post('/files/signature', upload.single('file'), FileController.store);

// Autenticar se o usuário está logado
routes.use(authMiddleware);

// Editar o Usuário
routes.put('/users', UserController.update);

// Destinatário
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

// Arquivos
routes.post('/files', upload.single('file'), FileController.store);

// Entregadores
routes.get('/deliverymen', DeliverymanController.index);
routes.post('/deliverymen', DeliverymanController.store);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

// Encomendas
routes.post('/deliveries', DeliveryController.store);
routes.get('/deliveries', DeliveryController.index);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

export default routes;
