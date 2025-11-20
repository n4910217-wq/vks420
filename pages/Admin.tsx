import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { SiteContent, ServiceItem } from '../types';
import { Save, LogOut, Plus, Trash2, RotateCcw } from 'lucide-react';

const Admin: React.FC = () => {
  const { content, updateContent, resetContent, logout } = useData();
  const [localContent, setLocalContent] = useState<SiteContent>(content);
  const [activeTab, setActiveTab] = useState<'general' | 'contacts' | 'services'>('general');
  const [message, setMessage] = useState('');

  // Синхронизация локального стейта с глобальным при загрузке
  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleSave = () => {
    updateContent(localContent);
    setMessage('Изменения успешно сохранены!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleHeroChange = (field: keyof typeof localContent.hero, value: string) => {
    setLocalContent(prev => ({
      ...prev,
      hero: { ...prev.hero, [field]: value }
    }));
  };

  const handleContactChange = (field: keyof typeof localContent.contacts, value: string) => {
    setLocalContent(prev => ({
      ...prev,
      contacts: { ...prev.contacts, [field]: value }
    }));
  };

  const handleServiceChange = (id: string, field: keyof ServiceItem, value: any) => {
    setLocalContent(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, [field]: value } : s)
    }));
  };

  const handleBenefitsChange = (id: string, value: string) => {
    // Разделяем строку по запятым для массива преимуществ
    const benefitsArray = value.split(',').map(item => item.trim()).filter(Boolean);
    handleServiceChange(id, 'benefits', benefitsArray);
  };

  const addService = () => {
    const newId = (Math.max(...localContent.services.map(s => parseInt(s.id) || 0)) + 1).toString();
    const newService: ServiceItem = {
      id: newId,
      title: 'Новая услуга',
      description: 'Описание услуги',
      benefits: ['Преимущество 1']
    };
    setLocalContent(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const removeService = (id: string) => {
    if (window.confirm('Вы уверены, что хотите удалить эту услугу?')) {
      setLocalContent(prev => ({
        ...prev,
        services: prev.services.filter(s => s.id !== id)
      }));
    }
  };

  const handleReset = () => {
    if (window.confirm('Это сбросит все тексты к значениям по умолчанию. Продолжить?')) {
      resetContent();
      setMessage('Настройки сброшены');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Admin Header */}
      <div className="bg-vks-dark text-white sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="font-bold text-xl">ВКС CMS</div>
          <div className="flex items-center gap-4">
             {message && <span className="text-green-400 text-sm font-medium animate-pulse">{message}</span>}
            <button 
              onClick={handleSave}
              className="bg-vks-brown hover:bg-white hover:text-vks-brown border border-vks-brown transition-colors text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Save size={18} /> Сохранить
            </button>
            <button 
              onClick={logout}
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <LogOut size={18} /> Выйти
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 border-b border-gray-200 mb-8 overflow-x-auto">
          {[
            { id: 'general', label: 'Главная и Общее' },
            { id: 'contacts', label: 'Контакты' },
            { id: 'services', label: 'Услуги' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-4 font-medium text-sm border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id 
                  ? 'border-vks-brown text-vks-brown' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          
          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="space-y-6 max-w-3xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Первый экран (Главная)</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок</label>
                <input
                  type="text"
                  value={localContent.hero.title}
                  onChange={(e) => handleHeroChange('title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vks-brown focus:border-vks-brown"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Подзаголовок</label>
                <textarea
                  rows={3}
                  value={localContent.hero.subtitle}
                  onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vks-brown focus:border-vks-brown"
                />
              </div>

              <div className="pt-8 border-t">
                <button 
                  onClick={handleReset}
                  className="text-red-500 hover:text-red-700 text-sm flex items-center gap-2"
                >
                  <RotateCcw size={16} /> Сбросить все настройки к начальным
                </button>
              </div>
            </div>
          )}

          {/* Contacts Tab */}
          {activeTab === 'contacts' && (
            <div className="space-y-6 max-w-3xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Контактные данные (Везде)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон (для звонка)</label>
                  <input
                    type="text"
                    value={localContent.contacts.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                    placeholder="+7903..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vks-brown focus:border-vks-brown"
                  />
                  <p className="text-xs text-gray-500 mt-1">Формат без пробелов: +79038911468</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон (отображение)</label>
                  <input
                    type="text"
                    value={localContent.contacts.phoneDisplay}
                    onChange={(e) => handleContactChange('phoneDisplay', e.target.value)}
                    placeholder="+7 (903) ..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vks-brown focus:border-vks-brown"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Адрес</label>
                <input
                  type="text"
                  value={localContent.contacts.address}
                  onChange={(e) => handleContactChange('address', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vks-brown focus:border-vks-brown"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ссылка WhatsApp</label>
                <input
                  type="text"
                  value={localContent.contacts.whatsappUrl}
                  onChange={(e) => handleContactChange('whatsappUrl', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vks-brown focus:border-vks-brown"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ссылка Telegram</label>
                <input
                  type="text"
                  value={localContent.contacts.telegramUrl}
                  onChange={(e) => handleContactChange('telegramUrl', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-vks-brown focus:border-vks-brown"
                />
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-8">
               <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-900">Список услуг</h3>
                <button 
                  onClick={addService}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
                >
                  <Plus size={16} /> Добавить услугу
                </button>
               </div>

               <div className="grid grid-cols-1 gap-6">
                 {localContent.services.map((service) => (
                   <div key={service.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50 relative group">
                     <button 
                        onClick={() => removeService(service.id)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1"
                        title="Удалить услугу"
                     >
                       <Trash2 size={20} />
                     </button>

                     <div className="grid md:grid-cols-2 gap-6">
                       <div>
                         <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Название услуги</label>
                         <input
                           type="text"
                           value={service.title}
                           onChange={(e) => handleServiceChange(service.id, 'title', e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-vks-brown"
                         />
                       </div>
                       
                       <div className="md:col-span-2">
                         <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Описание</label>
                         <textarea
                            rows={2}
                           value={service.description}
                           onChange={(e) => handleServiceChange(service.id, 'description', e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-vks-brown"
                         />
                       </div>

                       <div className="md:col-span-2">
                         <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
                            Преимущества (через запятую)
                         </label>
                         <input
                           type="text"
                           value={service.benefits.join(', ')}
                           onChange={(e) => handleBenefitsChange(service.id, e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-vks-brown"
                           placeholder="Быстро, Качественно, Надежно"
                         />
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Admin;