import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRestaurantStatus } from '@/contexts/RestaurantStatusContext';
import CartDrawer from '@/components/CartDrawer';
import logo from '@/assets/vck-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isOpen: restaurantIsOpen } = useRestaurantStatus();

  return (
    <nav className="bg-card shadow-soft sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-smooth">
            <img src={logo} alt="Veg Cloud Kitchen" className="h-10 w-auto" />
            <div className="hidden sm:block text-lg font-bold text-foreground">
              Veg Cloud Kitchen
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            <Link to="/menu" className="text-foreground hover:text-primary transition-smooth font-medium">
              Menu
            </Link>
            <Link to="/admin" className="text-foreground hover:text-primary transition-smooth font-medium">
              Admin
            </Link>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <CartDrawer />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50">
              <div className={`h-2 w-2 rounded-full ${restaurantIsOpen ? 'bg-accent animate-pulse' : 'bg-destructive'}`} />
              <span className="text-sm font-medium">{restaurantIsOpen ? 'Open' : 'Closed'}</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-muted/50">
              <div className={`h-2 w-2 rounded-full ${restaurantIsOpen ? 'bg-accent animate-pulse' : 'bg-destructive'}`} />
              <span className="text-xs font-medium">{restaurantIsOpen ? 'Open' : 'Closed'}</span>
            </div>
            <CartDrawer />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-card">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/admin"
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
