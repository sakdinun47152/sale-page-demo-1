import Image from "next/image";
import { Button } from "../ui/button";
import { SectionContainer } from "../ui/section-container";

export const Hero = () => {
  return (
    <SectionContainer id="hero" className="bg-white"> 
      <div
        className="
          container
          mx-auto
          px-4
          text-center
          max-w-3xl
        "
        >
        
        {/* Badge: สร้างความน่าเชื่อถือ/เร่งด่วน */}
        <span
          className="
            inline-block
            px-3
            py-1
            bg-red-100
            text-red-600
            rounded-full
            text-sm
            font-semibold
            mb-4
          "
        >
          ยอดขายอันดับ 1 ประจำปี 2025
        </span>

        {/* Headline: ต้องใหญ่ ชัด กระแทกใจ */}
        <h1
          className="
            text-4xl
            md:text-6xl
            font-extrabold
            text-gray-900
            mb-6
            leading-tight
          "
        >
          เปลี่ยนชีวิตของคุณให้ดีขึ้น <br/>

          <span
            className="
              text-red-600
            "
          >
            ด้วยสินค้าของเรา
          </span>
        </h1>

        {/* Sub-headline: ขยายความ */}
        <p
          className="
            text-lg
            text-gray-600
            mb-8
          "
        >
          จบทุกปัญหาที่กวนใจคุณ ด้วยนวัตกรรมใหม่ล่าสุด ที่พิสูจน์แล้วจากผู้ใช้จริงกว่า 10,000 คน
        </p>

        {/* Image: ใส่ priority เพื่อ LCP Score ที่ดี */}
        <div
          className="
            relative
            w-full
            aspect-video
            rounded-xl
            overflow-hidden
            shadow-2xl
            mb-8
          "
        >
          <div
            className="
              w-full
              h-full
              bg-gray-200
              flex
              justify-center
              items-center
              p-20
            "
          >
            <Image
              src="/img/watch1.png"
              alt="[Product Image Placeholder - Use Next/Image here with priority]"
              width={100}
              height={100}
              className="
                w-auto
                h-full
                text-gray-400
              "
            />
            <Image
              src="/img/watch2.png"
              alt="[Product Image Placeholder - Use Next/Image here with priority]"
              width={100}
              height={100}
              className="
                w-auto
                h-full
                text-gray-400
              "
            />
            <Image
              src="/img/watch3.png"
              alt="[Product Image Placeholder - Use Next/Image here with priority]"
              width={100}
              height={100}
              className="
                w-auto
                h-full
                text-gray-400
              "
            />
          </div>
        </div>

        {/* CTA for Desktop */}
        <div
          className="
            hidden
            md:block
          "
        >
          <Button
            className="
              text-xl
              px-8
              py-4
            "
          >
            สั่งซื้อทันที (ลด 50% วันนี้)
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};