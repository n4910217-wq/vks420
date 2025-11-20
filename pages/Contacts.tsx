import React, { useState } from 'react';
import { MapPin, Phone, Send } from 'lucide-react';
import { CONTACTS } from '../constants';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission would go here (e.g., fetch to API)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', comment: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-vks-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Контакты</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-vks-dark mb-8">Наши координаты</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-vks-milk p-3 rounded-full text-vks-brown mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600 text-lg">{CONTACTS.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-vks-milk p-3 rounded-full text-vks-brown mr-4">
                   <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Телефон</h3>
                  <a href={`tel:${CONTACTS.phone}`} className="text-lg text-vks-brown hover:underline font-medium">
                    {CONTACTS.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
               <a
                href={CONTACTS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-vks-brown text-vks-brown px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-vks-brown hover:text-white transition-colors"
              >
                Написать в WhatsApp
              </a>
               <a
                href={CONTACTS.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#229ED9] border-2 border-[#229ED9] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-[#1b7db0] hover:border-[#1b7db0] transition-colors"
              >
                <Send className="mr-2" size={18} /> Telegram Канал
              </a>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-vks-milk p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-vks-dark mb-6">Оставить заявку</h2>
            
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Спасибо!</strong>
                <span className="block sm:inline"> Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vks-brown focus:border-transparent outline-none transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vks-brown focus:border-transparent outline-none transition-all"
                    placeholder="+7 (999) 000-00-00"
                  />
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    value={formData.comment}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-vks-brown focus:border-transparent outline-none transition-all"
                    placeholder="Какой вопрос вас интересует?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-vks-brown text-white font-bold py-3 px-4 rounded-lg hover:bg-vks-dark transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  Отправить
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Нажимая кнопку «Отправить», вы даете согласие на обработку персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;