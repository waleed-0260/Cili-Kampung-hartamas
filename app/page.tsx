import { Navbar } from "@/components/layout/Navbar";
import { MobileNav } from "@/components/layout/MobileNav";
import { CartSidebar } from "@/components/layout/CartSidebar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { KampungTraditionSection } from "@/components/sections/KampungTraditionSection";
import { HeartOfVillageSection } from "@/components/sections/HeartOfVillageSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { SignatureDishesSection } from "@/components/sections/SignatureDishesSection";
import { LocationsPreviewSection } from "@/components/sections/LocationsPreviewSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <CartSidebar />
      <main>
        <Hero />
        <KampungTraditionSection />
        <HeartOfVillageSection />
        <PillarsSection />
        <SignatureDishesSection />
        <LocationsPreviewSection />
      </main>
      <Footer />
    </>
  );
}
