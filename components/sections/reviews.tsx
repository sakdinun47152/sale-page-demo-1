import { Star } from 'lucide-react';
import { SectionContainer } from '../ui/section-container';

const testimonials = [
  { 
    name: "คุณสมชาย", 
    title: "เจ้าของธุรกิจ SME", 
    review: "เว็บโหลดเร็วมากครับ ยอดขายเพิ่มขึ้น 30% ชัดเจน ตั้งแต่เปลี่ยนมาใช้บริการนี้", 
    stars: 5,
    imgPlaceholder: "ส" // ตัวอักษรย่อสำหรับ Avatar
  },
  { 
    name: "คุณสิรี", 
    title: "แม่ค้าออนไลน์", 
    review: "ระบบแจ้งเตือนเข้า Line ดีมาก ไม่พลาดทุกออเดอร์เลยค่ะ บริการดีมาก", 
    stars: 5,
    imgPlaceholder: "ส"
  },
  { 
    name: "คุณเอก", 
    title: "นักยิงแอด", 
    review: "ติด Pixel ง่าย คะแนนเว็บดีมาก ค่าแอดถูกลงจริงครับ ไม่ผิดหวังเลย", 
    stars: 5,
    imgPlaceholder: "อ"
  },
];

export const Reviews = () => {
  return (
    <SectionContainer id="reviews" className="bg-red-50"> 
      
      <h2 className="text-3xl font-bold text-black text-center mb-12">
        เสียงจากผู้ใช้งานจริง
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
              {/* Star Rating */}
              <div className="flex mb-4">
                {Array(item.stars).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-600 italic mb-6 grow">
                "{item.review}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
                  {/* ใช้ Next/Image ตรงนี้ถ้ามีรูปจริง */}
                  {item.imgPlaceholder} 
                </div>
                <div>
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      
    </SectionContainer>
  );
};