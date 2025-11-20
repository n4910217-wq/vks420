import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useData();
  const navigate = useNavigate();

  // Если уже авторизован, редирект в админку
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Неверный пароль');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-vks-milk px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 border border-vks-beige/30">
        <div className="text-center mb-8">
          <div className="mx-auto bg-vks-brown w-16 h-16 rounded-full flex items-center justify-center text-white mb-4">
            <Lock size={32} />
          </div>
          <h2 className="text-2xl font-bold text-vks-dark">Вход в систему</h2>
          <p className="text-gray-500 text-sm mt-2">Управление контентом сайта ВКС</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Пароль администратора
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vks-brown focus:border-transparent outline-none transition-all"
              placeholder="Введите пароль"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-vks-brown text-white font-bold py-3 px-4 rounded-lg hover:bg-vks-dark transition-colors duration-300"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;