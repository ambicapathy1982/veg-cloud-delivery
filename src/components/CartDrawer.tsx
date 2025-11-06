import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, Trash2, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CartDrawer = () => {
  const { cart, cartCount, cartTotal, updateQuantity, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);

  const formatPrice = (price: number) => `₹${price.toFixed(2)}`;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="default" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">
              {cartCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
            <div>
              <h3 className="font-semibold text-lg mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-4">Add some delicious dishes to get started!</p>
              <Button variant="default" onClick={() => setOpen(false)} asChild>
                <Link to="/menu">Browse Menu</Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-muted/30 p-4 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{formatPrice(item.price)} each</p>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-auto text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4 border-t">
              <div className="flex justify-between text-lg font-semibold">
                <span>Subtotal:</span>
                <span>{formatPrice(cartTotal)}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
