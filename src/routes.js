import { Router } from 'express';

import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';

import authMiddleware from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

// Criar um usuário
routes.post('/users', UserController.store);

// Inicar uma sessão
routes.post('/sessions', SessionController.store);

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
routes.get('/deliverymans', DeliverymanController.index);
routes.post('/deliverymans', DeliverymanController.store);
routes.put('/deliverymans/:id', DeliverymanController.update);

export default routes;
