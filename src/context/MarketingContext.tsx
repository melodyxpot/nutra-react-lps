import React, { createContext, useContext, useEffect, useState } from 'react';

interface MarketingContextType {
  marketing: Marketing | null;
  setMarketing: React.Dispatch<React.SetStateAction<Marketing | null>>;
}

const MarketingContext = createContext<MarketingContextType | undefined>(undefined);

export const useMarketing = (): MarketingContextType => {
  const context = useContext(MarketingContext);
  if (!context) {
    throw new Error('useMarketing must be used within a MarketingProvider');
  }
  return context;
};

interface MarketingProviderProps {
  children: React.ReactNode;
}

export const MarketingProvider = ({ children }: MarketingProviderProps) => {
  const [marketing, setMarketing] = useState<Marketing | null>(() => {
    // Retrieve the marketing from localStorage if it exists
    const storedMarketing = localStorage.getItem('marketing');
    return storedMarketing ? JSON.parse(storedMarketing) : null;
  });

  useEffect(() => {
    // Save the marketing to localStorage whenever it changes
    if (marketing !== null) {
      localStorage.setItem('marketing', JSON.stringify(marketing));
      window.dataLayer.push({
        ...marketing
    });
    } else {
      localStorage.removeItem('marketing');
    }
  }, [marketing]);

  // The value that will be provided to any descendant components
  const value: MarketingContextType = { marketing, setMarketing };

  return (
    <MarketingContext.Provider value={value}>
      {children}
    </MarketingContext.Provider>
  );
};
