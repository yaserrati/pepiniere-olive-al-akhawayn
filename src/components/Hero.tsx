import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '212630276822';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/27295308/pexels-photo-27295308.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          مشتل الأخوين
        </h1>
        <p className="text-xl md:text-3xl mb-8 drop-shadow-md">
          خبراء في إنتاج أشجار الزيتون
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          <MessageCircle size={24} />
          <span className="text-lg">اطلب عبر واتساب</span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
