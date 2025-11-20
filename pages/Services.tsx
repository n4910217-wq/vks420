import React from 'react';
import { Check } from 'lucide-react';
import { useData } from '../context/DataContext';

const Services: React.FC = () => {
  const { content } = useData();

  return (
    <div className="bg-vks-milk min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-vks-dark mb-4">Услуги компании</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-roboto">
            Мы берем на себя все сложности, связанные с импортом и оформлением, чтобы вы могли сосредоточиться на развитии бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl p-8 shadow-sm border border-vks-beige/20 hover:border-vks-brown/50 transition-all">
              <h3 className="text-2xl font-bold text-vks-brown mb-3">{service.title}</h3>
              <p className="text-vks-dark mb-6 font-roboto">{service.description}</p>
              
              <div className="bg-vks-milk/50 rounded-lg p-4">
                <h4 className="text-sm font-bold text-vks-dark uppercase tracking-wider mb-3">Преимущества:</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <Check size={16} className="text-vks-brown mt-0.5 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-vks-white p-8 rounded-xl border-l-4 border-vks-brown shadow-sm bg-white">
          <h3 className="text-xl font-bold text-vks-dark mb-2">Комплексное сопровождение</h3>
          <p className="text-gray-600">
            Помимо отдельных услуг, мы предлагаем полное аутсорсинговое сопровождение вашего импортного бизнеса. 
            От первой консультации до отгрузки товара конечному покупателю.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;