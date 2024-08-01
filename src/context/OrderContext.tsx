import React, { createContext, useContext, useEffect, useState } from 'react';

interface OrderContextType {
  order: Order | null;
  setOrder: React.Dispatch<React.SetStateAction<Order | null>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

interface OrderProviderProps {
  children: React.ReactNode;
}

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [order, setOrder] = useState<Order | null>(() => {
    // Retrieve the order from localStorage if it exists
    const storedOrder = localStorage.getItem('order');
    return storedOrder ? JSON.parse(storedOrder) : null;
  });

  useEffect(() => {
    // Save the order to localStorage whenever it changes
    if (order !== null) {
      localStorage.setItem('order', JSON.stringify(order));
    } else {
      localStorage.removeItem('order');
    }
  }, [order]);

  // The value that will be provided to any descendant components
  const value: OrderContextType = { order, setOrder };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};
