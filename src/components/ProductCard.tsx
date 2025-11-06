import { MenuItem } from '@/data/menuData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Flame } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

// Import images
import paneerTikka from '@/assets/paneer-tikka.jpg';
import samosa from '@/assets/samosa.jpg';
import paneerButterMasala from '@/assets/paneer-butter-masala.jpg';
import vegBiryani from '@/assets/veg-biryani.jpg';
import mangoLassi from '@/assets/mango-lassi.jpg';
import gulabJamun from '@/assets/gulab-jamun.jpg';

const imageMap: { [key: string]: string } = {
  'paneer-tikka': paneerTikka,
  'samosa': samosa,
  'paneer-butter-masala': paneerButterMasala,
  'veg-biryani': vegBiryani,
  'mango-lassi': mangoLassi,
  'gulab-jamun': gulabJamun,
};

interface ProductCardProps {
  item: MenuItem;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  const spiceLevelIndicator = () => {
    if (item.spiceLevel === 0) return null;
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: item.spiceLevel }).map((_, i) => (
          <Flame key={i} className="h-4 w-4 text-destructive fill-destructive" />
        ))}
      </div>
    );
  };

  const imageUrl = imageMap[item.image] || samosa;

  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {item.isVegetarian && (
            <Badge variant="accent" className="flex items-center gap-1">
              <Leaf className="h-3 w-3" />
              Veg
            </Badge>
          )}
          {item.isNew && (
            <Badge variant="secondary">New</Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
          {spiceLevelIndicator()}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</span>
          <Badge variant="outline">{item.category}</Badge>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          variant="default" 
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
