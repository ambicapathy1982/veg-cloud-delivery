import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface RestaurantStatusContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const RestaurantStatusContext = createContext<RestaurantStatusContextType | undefined>(undefined);

export const useRestaurantStatus = () => {
  const context = useContext(RestaurantStatusContext);
  if (!context) {
    throw new Error('useRestaurantStatus must be used within a RestaurantStatusProvider');
  }
  return context;
};

export const RestaurantStatusProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpenState] = useState<boolean>(() => {
    const stored = localStorage.getItem('restaurantIsOpen');
    return stored !== null ? JSON.parse(stored) : true;
  });

  const setIsOpen = (value: boolean) => {
    setIsOpenState(value);
    localStorage.setItem('restaurantIsOpen', JSON.stringify(value));
  };

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'restaurantIsOpen' && e.newValue) {
        setIsOpenState(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <RestaurantStatusContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </RestaurantStatusContext.Provider>
  );
};
