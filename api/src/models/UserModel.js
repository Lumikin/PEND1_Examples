import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, '../data/users.json');

export default class UserModel {
  /**
   * Lê todos os usuários do arquivo JSON simulado.
   * @returns {Array} Lista de usuários
   */
  static _readAll() {
    try {
      const data = fs.readFileSync(dbPath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Erro ao ler banco de dados JSON:', error);
      return [];
    }
  }

  /**
   * Busca um usuário pelo e-mail.
   * @param {string} email 
   * @returns {Object|null} Usuário encontrado ou null
   */
  static findByEmail(email) {
    const users = this._readAll();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    return user ? { ...user } : null;
  }

  /**
   * Busca um usuário pelo ID.
   * @param {number|string} id 
   * @returns {Object|null} Usuário encontrado ou null
   */
  static findById(id) {
    const users = this._readAll();
    const user = users.find(u => u.id === Number(id));
    return user ? { ...user } : null;
  }

  static verifyPassword(plainPassword, storedPassword) {
    try {
      return bcrypt.compareSync(plainPassword, storedPassword);
    } catch (error) {
      console.error('Erro ao verificar senha:', error);
      return false;
    }
  }

}
