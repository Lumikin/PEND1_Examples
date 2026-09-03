# 🔑 Backend de Autenticação JWT (Exemplo Didático)

Este é um servidor back-end construído em **Node.js + Express** com fins exclusivamente didáticos para acompanhar as aulas de **Persistência de Autenticação no React**.

Ele demonstra a implementação de autenticação segura utilizando **Tokens JWT (JSON Web Tokens)**, estruturado sob a arquitetura **MVC (Model-View-Controller)** e princípios de **Orientação a Objetos (OOP)**.

---

## ⚠️ AVISO IMPORTANTE: Simulação Didática
> **Este backend NÃO possui conexão com banco de dados real.**
> Ele lê e simula a persistência de usuários a partir do arquivo `users.json`.
> **Para fins de boa prática didática, as senhas no arquivo JSON estão criptografadas utilizando `bcryptjs` e são validadas de forma segura no login.**

---

## 👥 Usuários Cadastrados (Para Teste)

Para fins de teste e simulação nas aulas, os seguintes usuários estão pré-cadastrados no arquivo JSON:

| Nome | E-mail | Senha (Texto Limpo) | Role (Nível de Acesso) |
| --- | --- | --- | --- |
| **Professor React** | `professor@react.com` | `123456` | `professor` |
| **Aluno Dev** | `aluno@react.com` | `password123` | `aluno` |

---

## 🏛️ Arquitetura MVC & Orientação a Objetos

A API está dividida de forma a respeitar as camadas do **MVC**:

1. **Model (`src/models/UserModel.js`)**: Classe responsável por abstrair a manipulação dos dados de usuários (neste caso, lendo do JSON).
2. **View (HTTP/JSON)**: As respostas retornadas em formato JSON servem como a camada de visualização/comunicação com o front-end React.
3. **Controller (`src/controllers/AuthController.js`)**: Classe que intercepta as requisições HTTP, executa a lógica de autenticação (validação, geração de token, etc.) e envia a resposta correspondente.

---

## 🚀 Como Rodar o Projeto

1. **Instalar as dependências** (certifique-se de estar dentro do diretório `auth-backend`):
   ```bash
   npm install
   ```

2. **Configuração de Variáveis de Ambiente**:
   O arquivo `.env` na raiz já vem pré-configurado:
   ```env
   PORT=3001
   JWT_SECRET=super_segredo_para_a_aula_de_react_123
   ```

3. **Iniciar o Servidor em modo de desenvolvimento** (com reinício automático usando nodemon):
   ```bash
   npm run dev
   ```

O servidor iniciará em **`http://localhost:3001`**.

---

## 📌 Rotas Disponíveis

### 1. `POST /api/auth/login`
- **Público**: Sim
- **Objetivo**: Autenticar o usuário e retornar o token JWT.
- **Corpo da requisição (JSON)**:
  ```json
  {
    "email": "professor@react.com",
    "password": "123456"
  }
  ```
- **Resposta de Sucesso (200 OK)**:
  ```json
  {
    "message": "Login realizado com sucesso!",
    "user": {
      "id": 1,
      "name": "Professor React",
      "email": "professor@react.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### 2. `POST /api/auth/logout`
- **Público**: Sim
- **Objetivo**: Simular a invalidação da sessão. 
- **Detalhe**: Como JWT é *stateless* (sem estado), o servidor não guarda sessões. O logout de fato ocorre no React ao destruir o token armazenado no cliente.

### 3. `GET /api/auth/me`
- **Público**: Não (requer cabeçalho `Authorization: Bearer <TOKEN>`)
- **Objetivo**: Retornar os dados do usuário dono do token JWT enviado. É essencial para persistir o login do usuário quando a página do React é atualizada (F5).
- **Cabeçalho Requerido**:
  ```http
  Authorization: Bearer <TOKEN_GERADO_NO_LOGIN>
  ```
- **Resposta de Sucesso (200 OK)**:
  ```json
  {
    "user": {
      "id": 1,
      "name": "Professor React",
      "email": "professor@react.com"
    }
  }
  ```
