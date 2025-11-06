import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useRestaurantStatus } from '@/contexts/RestaurantStatusContext';
import { toast } from '@/hooks/use-toast';
import { Store, Clock } from 'lucide-react';

const Admin = () => {
  const { isOpen, setIsOpen } = useRestaurantStatus();

  const handleToggle = (checked: boolean) => {
    setIsOpen(checked);
    toast({
      title: checked ? "Restaurant Opened" : "Restaurant Closed",
      description: checked 
        ? "Orders are now enabled. Customers can place orders." 
        : "Orders are now disabled. 'Order Now' and 'Add to Cart' buttons are disabled.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="gradient-hero bg-clip-text text-transparent">
                Admin Dashboard
              </span>
            </h1>
            <p className="text-muted-foreground">Manage your restaurant settings and operations</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="h-5 w-5 text-primary" />
                  Restaurant Status
                </CardTitle>
                <CardDescription>
                  Control whether customers can place orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="restaurant-status" className="text-base font-semibold">
                      {isOpen ? 'Open for Orders' : 'Closed'}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {isOpen 
                        ? 'Customers can add items to cart and place orders' 
                        : 'Order buttons are disabled'}
                    </p>
                  </div>
                  <Switch
                    id="restaurant-status"
                    checked={isOpen}
                    onCheckedChange={handleToggle}
                    className="ml-4"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Hours of Operation
                </CardTitle>
                <CardDescription>
                  Regular business hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Sunday</span>
                    <span className="font-medium">11:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
