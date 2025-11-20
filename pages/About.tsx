import React from 'react';
import { useData } from '../context/DataContext';

const About: React.FC = () => {
  const { content } = useData();

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-vks-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">О компании</h1>
          <p className="text-vks-beige text-xl">Надёжность, проверенная временем.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg text-gray-700">
          <p className="text-xl font-medium text-vks-dark mb-8">
            ООО «Внешторг Консьерж Сервис» работает на рынке внешнеэкономической деятельности более 25 лет. 
            За это время мы зарекомендовали себя как надежный партнер для сотен импортеров и предпринимателей.
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-vks-milk p-6 rounded-lg">
              <h3 className="text-xl font-bold text-vks-brown mb-2">Официальная деятельность</h3>
              <p className="text-sm text-vks-dark">
                Мы работаем исключительно в правовом поле («в белую»). Это гарантирует нашим клиентам отсутствие рисков, штрафов и проблем с контролирующими органами.
              </p>
            </div>
            <div className="bg-vks-milk p-6 rounded-lg">
              <h3 className="text-xl font-bold text-vks-brown mb-2">Полный цикл</h3>
              <p className="text-sm text-vks-dark">
                Предоставляем весь спектр услуг: от логистики и таможенного оформления до сертификации и юридической поддержки.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-vks-dark mb-4">Наша миссия</h2>
          <p className="mb-8">
            Создавать безопасную и прозрачную среду для ведения бизнеса с зарубежными партнерами. 
            Мы помогаем предпринимателям «Садовода» и импортёров по всей России легализовать свои поставки, делая бизнес устойчивым и масштабируемым.
          </p>

          <h2 className="text-2xl font-bold text-vks-dark mb-4">Собственный Таможенный Склад</h2>
          <p>
            Одним из ключевых преимуществ компании является наличие собственного Таможенного Склада. 
            Это позволяет нам полностью контролировать процесс хранения и оформления грузов, обеспечивая максимальную скорость и сохранность товара.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-vks-dark font-bold">Готовы начать сотрудничество?</span>
            <a 
                href={content.contacts.whatsappUrl}
                className="bg-white text-vks-brown border border-vks-brown px-6 py-2 rounded-full font-medium hover:bg-vks-brown hover:text-white transition-colors"
            >
                Связаться с нами
            </a>
        </div>
      </div>
    </div>
  );
};

export default About;