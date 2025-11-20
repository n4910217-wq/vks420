import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Warehouse from './pages/Warehouse';
import Contacts from './pages/Contacts';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;