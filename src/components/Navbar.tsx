import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-xl font-bold text-green-800">مشتل الأخوين</span>
          </div>

          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-green-700 transition-colors">
              الرئيسية
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-700 transition-colors">
              من نحن
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-green-700 transition-colors">
              منتجاتنا
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-green-700 transition-colors">
              لماذا نحن
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-700 transition-colors">
              تواصل معنا
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <button onClick={() => scrollToSection('home')} className="block w-full text-right px-3 py-2 rounded-md hover:bg-gray-100">
              الرئيسية
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-right px-3 py-2 rounded-md hover:bg-gray-100">
              من نحن
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-right px-3 py-2 rounded-md hover:bg-gray-100">
              منتجاتنا
            </button>
            <button onClick={() => scrollToSection('why-us')} className="block w-full text-right px-3 py-2 rounded-md hover:bg-gray-100">
              لماذا نحن
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-right px-3 py-2 rounded-md hover:bg-gray-100">
              تواصل معنا
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
