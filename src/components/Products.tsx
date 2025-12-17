import { MessageCircle } from 'lucide-react';
import arb1 from "../assets/arb1.jpg";
import arb2 from "../assets/arb2.jpg";
import arb3 from "../assets/arb3.jpg";
import arb4 from "../assets/arb4.jpg";


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'شجرة زيتون - صنف اربوزانا',
    description: 'أشجار زيتون من صنف محسن، معروف بإنتاجيته العالية وجودة ثماره الممتازة. مثالي للإنتاج التجاري.',
    image: arb1,
  },
  {
    id: 2,
    name: 'شجرة زيتون - صنف بيشولين',
    description: 'صنف بيشولين المقاوم للجفاف والأمراض، ينتج زيتون عالي الجودة مناسب لإنتاج الزيت.',
    image: arb2,
  },
  {
    id: 3,
    name: 'شجرة زيتون - صنف أربكينا',
    description: 'أشجار أربكينا صغيرة الحجم، مناسبة للزراعة المكثفة، تنتج زيت ذو نكهة فاخرة.',
    image: arb3,
  },
  {
    id: 4,
    name: 'شجرة زيتون - الحوزية',
    description: 'صنف مانزانيلا المشهور بثماره الكبيرة، مثالي للتخليل والاستهلاك المباشر.',
    image: arb4,
  },
  {
    id: 5,
    name: 'شجرة زيتون - منارة',
    description: 'صنف محلي مقاوم للظروف المناخية القاسية، ينتج زيتون عالي الجودة.',
    image: 'https://images.pexels.com/photos/7946821/pexels-photo-7946821.jpeg',
  },
  {
    id: 6,
    name: 'شجرة زيتون',
    description: 'صنف كورونيكي اليوناني، ينتج أفضل أنواع زيت الزيتون البكر الممتاز.',
    image: 'https://images.pexels.com/photos/16841994/pexels-photo-16841994.jpeg',
  },
];

export default function Products() {
  const whatsappNumber = '212630276822';

  const orderProduct = (productName: string) => {
    const message = encodeURIComponent(`السلام عليكم، أريد الاستفسار عن ${productName}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">منتجاتنا</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من أشجار الزيتون عالية الجودة من أفضل الأصناف المحلية والعالمية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                <button
                  onClick={() => orderProduct(product.name)}
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>اطلب الآن</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
