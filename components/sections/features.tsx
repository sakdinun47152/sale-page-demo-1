import { CheckCircle } from "lucide-react"; // Icon

const features = [
  { title: "เร็วแรง", desc: "ประมวลผลไวกว่าเดิม 2 เท่า" },
  { title: "ประหยัด", desc: "คุ้มค่าที่สุดในตลาดตอนนี้" },
  { title: "รับประกัน", desc: "ดูแลหลังการขายตลอด 24 ชม." },
  { title: "ใช้งานง่าย", desc: "ไม่ต้องเรียนรู้ใหม่ ก็ใช้เป็น" },
];

export const Features = () => {
  return (
    <section
      className="
        py-16
        bg-gray-50
      "
    >
      <div
        className="
          container
          mx-auto
          px-4
          max-w-5xl
        "
      >
        <h2
          className="
            text-3xl
            font-bold
            text-center
            text-black
            mb-10
          "
        >
          ทำไมต้องเลือกเรา?
        </h2>
        
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="
                flex
                items-start
                gap-4
                p-6
                bg-white
                rounded-xl
                shadow-sm
                border
                border-gray-100
              "
            >
              <CheckCircle
                className="
                  w-8
                  h-8
                  text-green-500
                  shrink-0
                "
              />
              
              <div>

                <h3 className="
                  font-bold
                  text-xl
                  text-black
                  mb-2
                ">
                  {feat.title}
                </h3>

                <p
                  className="
                    text-gray-600
                  "
                >
                  {feat.desc}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};