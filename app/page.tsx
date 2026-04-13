import Header from './views/header';
import Hero from './views/homepage/components/hero';
import CategoryBanner from './views/homepage/components/categorybanner';
import Topbar from './views/homepage/components/topbar';
import FeaturedItems from './views/homepage/components/featureditems';
import Footer from './views/footer';

export default function Home() {
  return (
    <div className='main-h-screen bg-white selection:bg-red-500 selection:tex-white'>
      <Topbar />
      <Header />
      <main>
        <Hero />
        <CategoryBanner />
        <FeaturedItems />
      </main>
      <Footer />
    </div>   
  );
}
