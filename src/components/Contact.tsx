import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = '212630276822';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">تواصل معنا</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            نحن هنا للإجابة على جميع استفساراتكم
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="text-green-700" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">العنوان</h3>
                <p className="text-gray-600">
                  المملكة المغربية
                  <br />
مركز بويدة, زمران الشرقية, تملالت , إقليم قلعة السراغنة, المغرب                 
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="text-green-700" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">الهاتف</h3>
                <p className="text-gray-600" dir="ltr">+212 630 276 822</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="text-green-700" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">البريد الإلكتروني</h3>
                <p className="text-gray-600">machtalakhawayn@gmail.com</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={24} />
              <span className="text-lg">تواصل عبر واتساب</span>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1651.0228168268222!2d-7.416036629446118!3d31.695598200253134!2m3!1f0!2f38.907586296371086!3f0!3m2!1i1024!2i768!4f35!5e1!3m2!1sfr!2sma!4v1765971162225!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مشتل الأخوين"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
