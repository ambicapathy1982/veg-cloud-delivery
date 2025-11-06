import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
              Veg Cloud Kitchen
            </h3>
            <p className="text-muted-foreground mb-4">
              Authentic Indian vegetarian cuisine prepared with love, 
              fresh ingredients, and traditional recipes passed down through generations.
            </p>
            <p className="text-sm text-muted-foreground">
              100% Vegetarian • Fresh • Delicious
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  123 Spice Street, Mumbai, Maharashtra 400001, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">info@vegcloudkitchen.com</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Monday - Friday</p>
                  <p className="text-muted-foreground">11:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Saturday - Sunday</p>
                  <p className="text-muted-foreground">10:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Veg Cloud Kitchen. All rights reserved. Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
