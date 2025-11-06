import { menuItems } from '@/data/menuData';
import ProductCard from './ProductCard';

const FeaturedDishes = () => {
  const featuredItems = menuItems.filter((item) => item.isFeatured);

  return (
    <section className="py-16 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-hero bg-clip-text text-transparent">
              Featured Dishes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular vegetarian delights, crafted with authentic Indian spices and fresh ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
