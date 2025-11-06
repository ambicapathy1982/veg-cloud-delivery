import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-thali.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious Indian Vegetarian Thali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-hero bg-clip-text text-transparent">
              Veg Cloud Kitchen
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground">
            Pure Veg. Pure Taste. Pure Joy.
          </p>
          <p className="text-lg sm:text-xl mb-8 text-muted-foreground max-w-xl">
            Experience the authentic flavors of India with our carefully crafted vegetarian dishes. 
            Fresh ingredients, traditional recipes, and aromatic spices in every bite.
          </p>
          
          {/* Hours */}
          <div className="mb-8 p-4 bg-card/80 backdrop-blur-sm rounded-lg shadow-soft inline-block">
            <p className="font-semibold text-primary mb-1">🕒 Hours of Operation</p>
            <p className="text-muted-foreground">Monday - Sunday: 11:00 AM - 10:00 PM</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Order Now
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Menu
              </Button>
            </Link>
          </div>

          {/* Featured dishes */}
          <div className="mt-12">
            <p className="text-sm font-semibold text-muted-foreground mb-3">TODAY'S SPECIALS</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Paneer Butter Masala
              </span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
                Veg Biryani
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
                Gulab Jamun
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
