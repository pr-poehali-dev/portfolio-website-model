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
    'https://cdn.poehali.dev/projects/f6b24f93-fe64-4f8d-9ef4-9309f9e0db20/files/c47fb66f-8a6b-4aee-8508-aeee76f36fc7.jpg',
    'https://cdn.poehali.dev/projects/f6b24f93-fe64-4f8d-9ef4-9309f9e0db20/files/d98b38f6-779b-4918-85bd-01584ecd02f1.jpg',
    'https://cdn.poehali.dev/projects/f6b24f93-fe64-4f8d-9ef4-9309f9e0db20/files/cbd7da5f-af07-4e2d-8a48-1c146ffdb449.jpg',
    'https://cdn.poehali.dev/projects/f6b24f93-fe64-4f8d-9ef4-9309f9e0db20/files/c47fb66f-8a6b-4aee-8508-aeee76f36fc7.jpg',
    'https://cdn.poehali.dev/projects/f6b24f93-fe64-4f8d-9ef4-9309f9e0db20/files/d98b38f6-779b-4918-85bd-01584ecd02f1.jpg',
    'https://cdn.poehali.dev/projects/f6b24f93-fe64-4f8d-9ef4-9309f9e0db20/files/cbd7da5f-af07-4e2d-8a48-1c146ffdb449.jpg',
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-light tracking-widest">ALEXANDRA</h1>
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
              src="https://fpic.in/Wy7tXfD"
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
            <p>
              Александра — профессиональная модель с международным опытом работы. Начала карьеру в модельном 
              бизнесе в 2018 году и с тех пор сотрудничала с ведущими брендами и фотографами.
            </p>
            <p>
              Специализируется на high fashion съемках, рекламных кампаниях и подиумных показах. 
              Работала с известными дизайнерами и принимала участие в международных fashion weeks.
            </p>
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
                <p className="text-2xl font-light">178 см</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Параметры</p>
                <p className="text-2xl font-light">86-61-90</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Размер одежды</p>
                <p className="text-2xl font-light">42-44 (RU)</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Размер обуви</p>
                <p className="text-2xl font-light">38 (EU)</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Цвет глаз</p>
                <p className="text-2xl font-light">Зеленый</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Цвет волос</p>
                <p className="text-2xl font-light">Темно-русый</p>
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
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Icon name="Video" size={48} className="mx-auto mb-4" />
                <p className="text-sm uppercase tracking-wider">Video Portfolio 2024</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="Video" size={32} className="mx-auto mb-2" />
                  <p className="text-xs uppercase tracking-wider">Campaign Video</p>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Icon name="Video" size={32} className="mx-auto mb-2" />
                  <p className="text-xs uppercase tracking-wider">Runway Show</p>
                </div>
              </div>
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
                    <a href="mailto:alexandra@example.com" className="hover:text-black transition-colors">
                      alexandra@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} />
                    <a href="tel:+79001234567" className="hover:text-black transition-colors">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-light mb-4">Социальные сети</h3>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-gray-600 transition-colors">
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
          <p className="text-sm font-light tracking-wider">© 2024 Alexandra. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;