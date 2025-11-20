import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Warehouse from './pages/Warehouse';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { DataProvider, useData } from './context/DataContext';

// Компонент для защиты маршрута админки
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useData();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppContent: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="contacts" element={<Contacts />} />
          
          {/* CMS Routes */}
          <Route path="login" element={<Login />} />
          <Route 
            path="admin" 
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } 
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const App: React.FC = () => {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
};

export default App