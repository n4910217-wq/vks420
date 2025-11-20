import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, DataContextType } from '../types';
import { INITIAL_CONTENT } from '../constants';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  // Состояние контента
  const [content, setContent] = useState<SiteContent>(INITIAL_CONTENT);
  
  // Состояние авторизации админа
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Загрузка данных из localStorage при старте
  useEffect(() => {
    const savedContent = localStorage.getItem('vks_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error("Error parsing saved content", e);
      }
    }

    const savedAuth = localStorage.getItem('vks_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Функция обновления контента
  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem('vks_content', JSON.stringify(newContent));
  };

  // Сброс к заводским настройкам
  const resetContent = () => {
    setContent(INITIAL_CONTENT);
    localStorage.setItem('vks_content', JSON.stringify(INITIAL_CONTENT));
  };

  // Логин (простой хардкод для примера)
  const login = (password: string) => {
    if (password === 'vks2024') {
      setIsAuthenticated(true);
      localStorage.setItem('vks_auth', 'true');
      return true;
    }
    return false;
  };

  // Логаут
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('vks_auth');
  };

  return (
    <DataContext.Provider value={{ content, updateContent, resetContent, isAuthenticated, login, logout }}>
      {children}
    </DataContext.Provider>
  );
};