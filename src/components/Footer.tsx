import { MessageCircle, Leaf } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = '212630276822';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Leaf className="text-green-700" size={24} />
              </div>
              <span className="text-2xl font-bold">مشتل الأخوين</span>
            </div>
            <p className="text-green-100 leading-relaxed">
              متخصصون في زراعة وإنتاج أشجار الزيتون عالية الجودة بخبرة وكفاءة عالية.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-green-100 hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-green-100 hover:text-white transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#products" className="text-green-100 hover:text-white transition-colors">
                  منتجاتنا
                </a>
              </li>
              <li>
                <a href="#contact" className="text-green-100 hover:text-white transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <p className="text-green-100" dir="ltr">+212 630 276 822</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle size={20} />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 pt-6 text-center">
          <p className="text-green-200">
            {currentYear} © جميع الحقوق محفوظة - مشتل الأخوين
          </p>
        </div>
      </div>
    </footer>
  );
}
