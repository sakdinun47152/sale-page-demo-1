import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string; // เผื่อเราอยากใส่ class เพิ่มเติม เช่น เปลี่ยนสีพื้นหลัง
  id?: string;        // สำหรับทำ Anchor Link (เช่น #order-form)
}

/**
 * นี่คือ "กล่อง" ที่ใช้หุ้มทุก Section
 * หน้าที่ของมันคือ:
 * 1. คุม Padding (py-16 หรือ py-20)
 * 2. คุม Max Width (container mx-auto px-4 max-w-5xl)
 */
export const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section 
      id={id}
      // เราใช้ cn() เพื่อให้สามารถ override class จากข้างนอกได้
      // เช่น ถ้าใส่ className="bg-gray-50" มันก็จะเพิ่มเข้าไป
      className={cn(
        "py-16 md:py-20", // ระยะห่างแนวตั้ง (มาตรฐาน)
        className          // Class ที่ส่งมาจาก Prop
      )}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {children}
      </div>
    </section>
  );
};