import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ShieldCheck, Truck, FileText, BarChart } from 'lucide-react';
import { CONTACTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-vks-dark text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sans">
            Легальный импорт <br />
            <span className="text-vks-beige">и сопровождение бизнеса</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-roboto">
            ВКС — один партнёр для честного и безопасного бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href={CONTACTS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-vks-brown border-2 border-white hover:bg-transparent hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
            >
              Получить консультацию
            </a>
            <a
              href={CONTACTS.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vks-brown text-white border-2 border-vks-brown hover:bg-transparent px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
            >
              Перейти в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-vks-brown mb-6 uppercase tracking-wide">О компании</h2>
              <div className="space-y-4 text-vks-dark/80 font-roboto">
                <div className="flex items-start">
                  <div className="bg-vks-milk p-2 rounded-full mr-4 mt-1">
                    <ShieldCheck className="text-vks-brown" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-vks-dark">Более 25 лет опыта</h4>
                    <p>Надёжный партнёр на рынке ВЭД.</p>
                  </div>
                </div>
                <div className="flex items-start">
                   <div className="bg-vks-milk p-2 rounded-full mr-4 mt-1">
                    <FileText className="text-vks-brown" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-vks-dark">Работаем официально</h4>
                    <p>Полное юридическое сопровождение и «белые» схемы.</p>
                  </div>
                </div>
                <div className="flex items-start">
                   <div className="bg-vks-milk p-2 rounded-full mr-4 mt-1">
                    <Truck className="text-vks-brown" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-vks-dark">Собственный Таможенный Склад</h4>
                    <p>Контроль грузов и оперативное оформление.</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-lg font-medium text-vks-dark">
                Сопровождаем предпринимателей «Садовода» и импортёров по всей России.
              </p>
            </div>
            <div className="bg-vks-milk rounded-2xl p-8 md:p-12 relative overflow-hidden">
               {/* Decorative Background Element */}
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-vks-beige/20 rounded-full"></div>
               <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-vks-brown/10 rounded-full"></div>
               
               <h3 className="relative z-10 text-2xl font-bold text-vks-dark mb-6">Почему выбирают нас?</h3>
               <ul className="relative z-10 space-y-3">
                 {['Правильное оформление документов', 'Высокая скорость работы', 'Отсутствие штрафов', 'Безопасность и законность'].map((item, idx) => (
                   <li key={idx} className="flex items-center bg-white/60 p-3 rounded-lg">
                     <CheckCircle className="text-vks-brown mr-3" size={20} />
                     <span className="text-vks-dark font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-vks-milk">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vks-dark mb-4">Наши услуги</h2>
            <div className="h-1 w-20 bg-vks-brown mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Импорт под ключ', icon: <Truck size={32} /> },
              { title: 'Разрешительные документы', icon: <FileText size={32} /> },
              { title: 'Маркировка «Честный Знак»', icon: <ShieldCheck size={32} /> },
              { title: 'Сертификация', icon: <CheckCircle size={32} /> },
              { title: 'Логистика', icon: <Truck size={32} /> },
              { title: 'Бухгалтерия и юр. поддержка', icon: <BarChart size={32} /> },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-vks-brown">
                <div className="text-vks-brown mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-vks-dark mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Полное сопровождение и профессиональный подход к решению ваших задач.
                </p>
                <Link to="/services" className="text-vks-brown font-medium text-sm flex items-center hover:underline">
                  Подробнее <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
             <div className="inline-block bg-white px-6 py-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-vks-dark">Комплексное сопровождение бизнеса</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Warehouse Teaser */}
      <section className="py-20 bg-vks-dark text-white relative">
        <div className="absolute inset-0 bg-vks-brown/20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Собственный Таможенный Склад</h2>
          <p className="text-xl text-vks-beige mb-8 max-w-2xl mx-auto font-roboto">
            Гарантируем сохранность груза, скорость оформления и полный контроль на всех этапах.
          </p>
          <Link 
            to="/warehouse" 
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-vks-dark bg-vks-beige hover:bg-white transition-colors"
          >
            Подробнее о складе
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-vks-dark">Процесс работы</h2>
          </div>
          
          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-vks-milk -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: '01', title: 'Заявка' },
                { step: '02', title: 'Анализ' },
                { step: '03', title: 'Оформление' },
                { step: '04', title: 'Доставка' },
                { step: '05', title: 'Документы' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center bg-white md:bg-transparent p-4">
                  <div className="w-12 h-12 bg-vks-brown text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg border-4 border-white">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-vks-dark">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-vks-milk">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-vks-dark mb-10">Для кого наши услуги</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Импортёры', 'Предприниматели', 'Продавцы на «Садоводе»'].map((who, i) => (
              <span key={i} className="px-6 py-3 bg-white text-vks-brown font-semibold rounded-full shadow-sm border border-vks-beige">
                {who}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-vks-dark rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Остались вопросы?</h2>
              <p className="text-vks-beige">Свяжитесь с нами любым удобным способом.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
               <a
                href={CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-vks-brown font-medium px-6 py-3 rounded-lg text-center hover:bg-vks-beige hover:text-vks-dark transition-colors"
              >
                WhatsApp
              </a>
               <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-vks-beige text-vks-beige font-medium px-6 py-3 rounded-lg text-center hover:bg-vks-beige hover:text-vks-dark transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;