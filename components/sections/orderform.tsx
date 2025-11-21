"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const FormField = ({ id, label, type = "text", placeholder, required = true }: any) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
);


export const OrderForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Submission failed');

      setStatus("success");
      form.reset(); 

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="py-16 bg-white" id="order-form">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center p-10 bg-green-100 text-green-700 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">ขอบคุณครับ!</h3>
            <p className="text-lg">เราได้รับข้อมูลของคุณแล้ว และจะรีบติดต่อกลับโดยเร็วที่สุด</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white" id="order-form">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-black text-center mb-4">
          รับข้อเสนอสุดพิเศษทันที!
        </h2>
        <p className="text-center text-gray-600 mb-8">
          กรอกข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับ (ยังไม่ต้องชำระเงิน)
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <FormField id="name" label="ชื่อ-นามสกุล" placeholder="คุณสมชาย ใจดี" required={true}/>
          <FormField id="phone" label="เบอร์โทรศัพท์" type="tel" placeholder="081-234-5678" required={true} />
          <FormField id="lineid" label="Line ID (ถ้ามี)" placeholder="somchai_jaidee" required={false} />
          
          <div>
            <Button 
              type="submit" 
              fullWidth 
              className="text-lg py-4"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "กำลังส่งข้อมูล..." : "ส่งข้อมูลให้เจ้าหน้าที่ติดต่อกลับ"}
            </Button>
          </div>

          {status === "error" && (
            <p className="text-center text-red-600">
              เกิดข้อผิดพลาด! กรุณาลองใหม่อีกครั้ง หรือติดต่อผ่าน Line
            </p>
          )}
        </form>
      </div>
    </section>
  );
};