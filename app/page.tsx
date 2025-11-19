import { Hero } from "@/components/sections/hero";
import { PainPoints } from "@/components/sections/painpoints";
import { Features } from "@/components/sections/features";
import { Reviews } from "@/components/sections/reviews";
import { OrderForm } from "@/components/sections/orderform";
import { StickyFooter } from "@/components/sections/stickyfooter";

export default function Home() {
  return (
    <main
      className="
        min-h-screen
        pb-20
        md:pb-0
      "
    > 
      <Hero />
      <PainPoints />
      <Features />
      <Reviews />
      <OrderForm />

      <StickyFooter />
    </main>
  );
}