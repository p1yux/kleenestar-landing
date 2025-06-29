import HeroSection from "@/components/custom/home/HeroSection";
import NavBar from "@/components/custom/navigation/NavBar";
import WhatWeDo from "@/components/custom/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <main className="bg-[#D8D8D4]">
        <HeroSection />
        <WhatWeDo />
      </main>
    </>
  );
}
