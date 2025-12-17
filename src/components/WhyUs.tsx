import { Award, Sprout, DollarSign, Truck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'جودة عالية',
    description: 'نستخدم أفضل الأصناف والتقنيات لضمان أشجار قوية وصحية',
  },
  {
    icon: Sprout,
    title: 'خبرة في أشجار الزيتون',
    description: 'خبرة طويلة ومتخصصة في زراعة وإنتاج أشجار الزيتون',
  },
  {
    icon: DollarSign,
    title: 'أسعار مناسبة',
    description: 'أسعار تنافسية مع ضمان أفضل قيمة مقابل المال',
  },
  {
    icon: Truck,
    title: 'توصيل حسب الطلب',
    description: 'خدمة توصيل موثوقة إلى جميع المناطق',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">لماذا نحن؟</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نتميز بمجموعة من المزايا التي تجعلنا الخيار الأمثل لمشروعك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full mb-6">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
