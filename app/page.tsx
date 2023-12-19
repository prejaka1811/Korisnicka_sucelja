import HeroSection from "@/app/_components/HeroSection";
import CtaSection from "@/app/_components/CtaSection";
import TestimonialsSection from "@/app/_components/TestimonialsSection";
import UpperPart from "@/app/_components/UpperPart";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center">
      <UpperPart/>
      <TestimonialsSection />      
      <CtaSection />
    </main>
  );

  //uvodni pitch 
  //3 slidea
  //sharing with big picture
}
