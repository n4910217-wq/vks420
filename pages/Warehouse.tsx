import React from 'react';
import { Shield, Clock, Package, FileCheck } from 'lucide-react';

const Warehouse: React.FC = () => {
  return (
    <div className="min-h-screen bg-vks-milk">
      {/* Hero */}
      <div className="bg-vks-brown text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Собственный Таможенный Склад</h1>
          <p className="text-xl text-vks-beige max-w-3xl mx-auto">
            Скорость, контроль и безопасность ваших грузов на каждом этапе оформления.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vks-milk rounded-full mb-4 text-vks-brown">
              <Shield size={32} />
            </div>
            <h3 className="text-lg font-bold text-vks-dark mb-2">Официальный статус</h3>
            <p className="text-sm text-gray-600">
              Лицензированный склад временного хранения (СВХ).
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vks-milk rounded-full mb-4 text-vks-brown">
              <Package size={32} />
            </div>
            <h3 className="text-lg font-bold text-vks-dark mb-2">Контроль груза</h3>
            <p className="text-sm text-gray-600">
              Полная ответственность за сохранность с момента поступления.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vks-milk rounded-full mb-4 text-vks-brown">
              <Clock size={32} />
            </div>
            <h3 className="text-lg font-bold text-vks-dark mb-2">Быстрое оформление</h3>
            <p className="text-sm text-gray-600">
              Минимизация простоев благодаря оптимизированным процессам.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-vks-milk rounded-full mb-4 text-vks-brown">
              <FileCheck size={32} />
            </div>
            <h3 className="text-lg font-bold text-vks-dark mb-2">Снижение рисков</h3>
            <p className="text-sm text-gray-600">
              Исключение ошибок и проблем при таможенной очистке.
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-vks-dark mb-6">Ваши преимущества</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Наличие собственного склада позволяет нам предлагать клиентам уникальные условия сотрудничества, недоступные обычным брокерам.
              </p>
              <ul className="space-y-4">
                {[
                  'Отсутствие посредников и лишних наценок',
                  'Возможность консолидации грузов',
                  'Гибкие тарифы на хранение',
                  'Оперативный досмотр и выпуск товаров'
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-vks-dark">
                    <span className="w-2 h-2 bg-vks-brown rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
             <div className="bg-vks-milk h-64 md:h-full rounded-xl flex items-center justify-center text-vks-brown/30">
                 {/* Placeholder for Warehouse Image */}
                 <Package size={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;