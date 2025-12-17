import { Leaf } from 'lucide-react';
import tree from "../assets/_MG_2315.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Leaf className="text-green-700" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={tree}
              alt="مشتل الأخوين"
              className="rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              مشتل الأخوين هو مؤسسة رائدة في مجال زراعة وإنتاج أشجار الزيتون عالية الجودة.
              نفتخر بخبرتنا الطويلة في هذا المجال وحرصنا على تقديم أفضل الأصناف التي تتميز
              بالإنتاجية العالية والمقاومة للأمراض.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              نعتمد على أحدث التقنيات الزراعية لضمان نمو أشجار قوية وصحية، مع متابعة دقيقة
              لكل مرحلة من مراحل النمو. فريقنا من الخبراء المتخصصين يضمن لك الحصول على
              أشجار ذات جودة استثنائية.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              التزامنا بالجودة والاحترافية جعلنا الخيار الأول للمزارعين والمستثمرين في
              قطاع الزيتون. نحن هنا لمساعدتك في تحقيق أفضل النتائج لمشروعك الزراعي.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
