import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);

// Rota padrão para verificar o status da API
app.get('/', (req, res) => {
  res.json({
    message: 'Backend de Autenticação JWT para Aula de React ativo!',
    endpoints: {
      login: 'POST /api/auth/login',
      logout: 'POST /api/auth/logout',
      me: 'GET /api/auth/me (Protegido)'
    }
  });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`  Servidor de aula rodando com sucesso!`);
  console.log(`  Acesse em: http://localhost:${PORT}`);
  console.log(`==================================================`);
});
