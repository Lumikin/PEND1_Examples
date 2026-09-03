import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

// Rota pública de login
router.post('/login', AuthController.login);

// Rota pública/semiprotegida de logout
router.post('/logout', AuthController.logout);

// Rota protegida para buscar os dados do usuário autenticado no momento (útil para persistência no React)
router.get('/me', authMiddleware, AuthController.me);

export default router;
