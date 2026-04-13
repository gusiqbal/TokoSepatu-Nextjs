import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import TopBar from "@/src/features/home/components/TopBar";
import Hero from "@/src/features/home/components/Hero";
import CategoryBanner from "@/src/features/home/components/CategoryBanner";
import FeaturedItems from "@/src/features/home/components/FeaturedItems";
import PromoBanner from "@/src/features/home/components/FeaturedBanner";
import Features from "@/src/features/home/components/Features";
import SecondaryBanners from "@/src/features/home/components/SecondaryBanner";
import Testimonials from "@/src/features/home/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-red-500 selection:text-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <CategoryBanner />
        <FeaturedItems />
        <PromoBanner />
        <Features />
        <SecondaryBanners />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
