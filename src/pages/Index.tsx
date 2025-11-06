import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDishes from '@/components/FeaturedDishes';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedDishes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
