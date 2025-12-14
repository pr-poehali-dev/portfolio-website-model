import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const galleryImages = [
    'https://storage.yandexcloud.net/fotora.ru/uploads/3e44f0188ac7b1f4.jpeg',
    'https://storage.yandexcloud.net/fotora.ru/uploads/0d3a67b11a1906ca.jpeg',
    'https://storage.yandexcloud.net/fotora.ru/uploads/9689557b902a78f2.jpeg',
    'https://storage.yandexcloud.net/fotora.ru/uploads/6a271288c0d33199.jpeg',
    'https://storage.yandexcloud.net/fotora.ru/uploads/f2ca1d112391e808.jpeg',
    'https://storage.yandexcloud.net/fotora.ru/uploads/27cce8ddb3463211.jpeg',
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-light tracking-widest">БЕЛЯКОВ НИКОЛАЙ</h1>
            <div className="flex gap-8">
              {['home', 'about', 'stats', 'gallery', 'video', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm tracking-wider uppercase transition-colors ${
                    activeSection === section ? 'text-black font-medium' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О модели'}
                  {section === 'stats' && 'Параметры'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'video' && 'Видео'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-6xl tracking-wide font-extrabold">Беляков Николай</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">модель с опытом работы, в рекламе и коммерческих съемках</p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="mt-6 px-8 py-6 text-sm tracking-widest uppercase"
            >связаться</Button>
          </div>
          <div className="animate-fade-in">
            <img 
              src="https://i126.fastpic.org/big/2025/1214/d6/70a8df095646ca63a978d27c09d9c7d6.jpeg"
              alt="Alexandra"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light tracking-wide mb-12 text-center">О модели</h2>
          <div className="space-y-6 text-gray-700 font-light leading-relaxed text-lg">
            <p>Николай, 17 лет. Только начинаю свой путь в моделинге. Активно занимаюсь спортом (зал, футбол), что помогает держать форму и чувствовать себя уверенно перед камерой. Быстро учусь, хорошо работаю в кадре и с удовольстью принимаю любые творческие задачи. Нацелен на профессиональный рост и готов усердно работать.</p>
            <p> </p>
            <p>
              Профессиональный подход, пунктуальность и умение работать в команде — ключевые качества, 
              которые ценят клиенты и партнеры.
            </p>
          </div>
        </div>
      </section>

      <section id="stats" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light tracking-wide mb-12 text-center">Параметры</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Рост</p>
                <p className="text-2xl font-light">175 см</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Размер одежды</p>
                <p className="text-2xl font-light">46-48 (RU)</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Размер обуви</p>
                <p className="text-2xl font-light">42-43 (EU)</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Цвет глаз</p>
                <p className="text-2xl font-light">голубой</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Цвет волос</p>
                <p className="text-2xl font-light">каштановый</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light tracking-wide mb-12 text-center">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden aspect-[3/4] group cursor-pointer">
                <img 
                  src={img}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-light tracking-wide mb-12 text-center">Видео</h2>
          <div className="space-y-8">
            <div className="aspect-video bg-black">
              <video 
                controls 
                className="w-full h-full"
                src="https://static.wfolio.ru/file/AqiFFw_TXMM4LDwoI2TPSR66D_XxSEQa/hUis9TCsbhKTa4f4FDcdCN74cNLxB1ge/1FIEsZJDRo8EClOobMHKOf_GWe_klDZZ/ecqW5ncTtFUGb0NItI9gVKit2_dmbW8g/XTZDc-m5P9XiutgImA_Pti8suWAIS-Xm/2HIF4bLIPHk.mp4"
              >
                Ваш браузер не поддерживает видео
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <h2 className="text-4xl font-light tracking-wide mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-light mb-4">Свяжитесь со мной</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} />
                    <a href="mailto:alexandra@example.com" className="hover:text-black transition-colors">7839206@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} />
                    <a href="tel:+79001234567" className="hover:text-black transition-colors">+7 (985) 783-92-06</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">Социальные сети</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/k.belyakov1?igsh=em5vbG5wNG43aXRu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                    <Icon name="Instagram" size={24} />
                  </a>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    <Icon name="Facebook" size={24} />
                  </a>
                  <a href="#" className="hover:text-gray-600 transition-colors">
                    <Icon name="Twitter" size={24} />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <Input 
                placeholder="Имя" 
                className="border-gray-300 focus:border-black"
              />
              <Input 
                type="email" 
                placeholder="Email" 
                className="border-gray-300 focus:border-black"
              />
              <Textarea 
                placeholder="Сообщение" 
                rows={5}
                className="border-gray-300 focus:border-black resize-none"
              />
              <Button className="w-full py-6 text-sm tracking-widest uppercase">
                Отправить
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-light tracking-wider">видеовизитка</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;