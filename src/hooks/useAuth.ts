import { useState, useEffect } from 'react';
interface User {
  id: string;
  email: string;
  name: string;
}
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  const login = (email: string, password: string): boolean => {
    // Demo credentials: admin@luxesalon.com / admin123
    if (email === 'admin@luxesalon.com' && password === 'admin123') {
      const user = {
        id: '1',
        email,
        name: 'Admin User'
      };
      localStorage.setItem('adminUser', JSON.stringify(user));
      setUser(user);
      return true;
    }
    return false;
  };
  const logout = () => {
    localStorage.removeItem('adminUser');
    setUser(null);
  };
  return {
    user,
    loading,
    login,
    logout
  };
}