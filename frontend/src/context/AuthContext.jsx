import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    var savedUser = localStorage.getItem('cyfive_user');

    if (savedUser) {
      var userData = JSON.parse(savedUser);
      setUser(userData);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + userData.token;
    }

    setLoading(false);

  }, []);

  async function login(email, password) {

    var response = await axios.post('/api/auth/login', { email, password });

    setUser(response.data);
    localStorage.setItem('cyfive_user', JSON.stringify(response.data));
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;

  }

  async function register(name, email, password) {

    var response = await axios.post('/api/auth/register', { name, email, password });

    setUser(response.data);
    localStorage.setItem('cyfive_user', JSON.stringify(response.data));
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;

  }

  function logout() {

    setUser(null);
    localStorage.removeItem('cyfive_user');
    delete axios.defaults.headers.common['Authorization'];

  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

export function useAuth() {
  return useContext(AuthContext);
}