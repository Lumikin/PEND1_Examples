import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';

export default class AuthController {
  /**
   * Realiza a autenticação do usuário e retorna um token JWT.
   * Rota: POST /api/auth/login
   */
  static login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'E-mail e senha são obrigatórios.' });
    }

    const user = UserModel.findByEmail(email);

    if (!user || !UserModel.verifyPassword(password, user.password)) {
      return res.status(401).json({ message: 'E-mail ou senha incorretos.' });
    }

    // Gerar token JWT
    const jwtSecret = process.env.JWT_SECRET || 'secret';
    // Expira em 1 hora para simular tempo real
    const token = jwt.sign(
      { id: user.id, email: user.email }, 
      jwtSecret, 
      { expiresIn: '1h' }
    );

    // Remove a senha antes de retornar os dados
    delete user.password;

    return res.status(200).json({
      message: 'Login realizado com sucesso!',
      user,
      token
    });
  }

  /**
   * Realiza o logout.
   * Rota: POST /api/auth/logout
   */
  static logout(req, res) {
    // Como JWT é stateless, o logout "real" é feito no front-end removendo o token.
    // No entanto, é excelente prática didática ter esta rota para simular o processo
    // ou invalidar sessões adicionais se necessário.
    return res.status(200).json({
      message: 'Logout realizado com sucesso! Remova o token do armazenamento local (localStorage/sessionStorage).'
    });
  }

  /**
   * Retorna os dados do usuário autenticado no momento.
   * Rota: GET /api/auth/me (Protegida)
   */
  static me(req, res) {
    // req.user é preenchido pelo authMiddleware após validar o token
    return res.status(200).json({
      user: req.user
    });
  }
}
