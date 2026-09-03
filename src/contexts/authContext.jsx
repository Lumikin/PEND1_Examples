import { createContext, useState, useEffect } from "react";
import { loginRequest, getMeRequest } from "../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function localStorageData() {
      const storedToken = localStorage.getItem("@CatalogoPessoas:token");
      const storedUser = localStorage.getItem("@CatalogoPessoas:user");

      if (storedToken && storedUser) {
        try {
          const data = await getMeRequest();
          setUser(data.user);
        } catch (error) {
          logout();
        }
      }
      setLoading(false);
    }
    localStorageData();
  }, []);
  async function login(email, password) {
    const data = await loginRequest(email, password);
    setUser(data.user);
    localStorage.setItem("@CatalogoPessoas:token", data.token);
    localStorage.setItem("@CatalogoPessoas:user", JSON.stringify(data.user));
  }
}
