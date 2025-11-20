import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useData } from '../context/DataContext';
import { Menu, X, MessageCircle, Send } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { content } = useData(); // Используем динамические данные

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper to check if link is active
  const isActive = (path: string) => {
    return location.pathname === path ? "text-vks-brown font-semibold" : "text-vks-dark hover:text-vks-brown transition-colors";
  };

  return (
    <div className="min-h-screen flex flex-col bg-vks-milk font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-vks-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl md:text-2xl font-bold text-vks-brown tracking-tight uppercase leading-tight" onClick={closeMenu}>
                ВНЕШТОРГ <br className="hidden sm:block md:hidden" />
                КОНСЬЕРЖ СЕРВИС
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm lg:text-base ${isActive(link.path)}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={content.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-vks-brown text-vks-brown hover:bg-vks-brown hover:text-white transition-all"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={content.contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-vks-brown text-white hover:bg-vks-dark transition-all"
                title="Telegram"
              >
                <Send size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-vks-dark hover:text-vks-brown p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-vks-beige/30 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-3 text-base font-medium border-b border-gray-100 ${location.pathname === link.path ? "text-vks-brown bg-vks-milk/30" : "text-vks-dark"}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex space-x-4 mt-6 px-3">
                <a
                  href={content.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-2 border border-vks-brown rounded-md text-vks-brown font-medium"
                >
                  <MessageCircle className="mr-2" size={18} /> WhatsApp
                </a>
                <a
                  href={content.contacts.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-2 bg-vks-brown rounded-md text-white font-medium"
                >
                  <Send className="mr-2" size={18} /> Telegram
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-vks-dark text-vks-milk pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Branding */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
                ВНЕШТОРГ <br /> КОНСЬЕРЖ СЕРВИС
              </h3>
              <p className="text-vks-beige text-sm leading-relaxed max-w-xs">
                Один партнёр для честного и безопасного бизнеса.
              </p>
            </div>

            {/* Column 2: Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">О нас</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-vks-brown rounded-full mr-2"></span>
                  Более 25 лет опыта
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-vks-brown rounded-full mr-2"></span>
                  Работаем официально
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-vks-brown rounded-full mr-2"></span>
                  Собственный Таможенный Склад
                </li>
              </ul>
            </div>

            {/* Column 3: Contacts */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Контакты</h4>
              <div className="space-y-4 text-sm text-gray-300">
                <p>{content.contacts.address}</p>
                <p className="text-white font-medium">{content.contacts.phoneDisplay}</p>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={content.contacts.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vks-beige hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={content.contacts.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-vks-beige hover:text-white transition-colors"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex justify-center items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} ООО «Внешторг Консьерж Сервис». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;