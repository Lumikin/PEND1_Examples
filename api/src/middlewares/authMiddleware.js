import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';

/**
 * Middleware para validar o token JWT nas rotas protegidas.
 */
export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  // O cabeçalho vem no formato: "Bearer <TOKEN>"
  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).json({ message: 'Erro no formato do token.' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: 'Token mal formatado.' });
  }

  const jwtSecret = process.env.JWT_SECRET || 'secret';

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido ou expirado.' });
    }

    // decoded.id vem do payload gerado no login
    const user = UserModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado.' });
    }

    // Remove a senha por segurança antes de anexar à requisição
    delete user.password;
    req.user = user;

    return next();
  });
}
