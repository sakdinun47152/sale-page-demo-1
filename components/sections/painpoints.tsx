import { XCircle } from 'lucide-react';

const problems = [
  "เสียเงินยิงแอดแต่ขายไม่ได้",
  "เว็บโหลดช้า ลูกค้าหนีไปก่อน",
  "ปิดการขายหน้าแชทไม่ทัน",
  "ลูกค้าไม่เชื่อถือเพราะเว็บดูไม่มืออาชีพ",
  "คู่แข่งตัดราคาทุกวัน",
  "ไม่รู้จะเริ่มทำเว็บยังไงให้ปัง",
  
];

export const PainPoints = () => {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-red-900">
          คุณกำลังเจอปัญหาเหล่านี้ใช่หรือไม่?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-red-100">
              <XCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
              <p className="text-lg text-gray-700 leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};