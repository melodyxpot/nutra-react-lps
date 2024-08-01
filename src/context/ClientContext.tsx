import React, { createContext, useContext, useEffect, useState } from 'react';

interface ClientContextType {
  client: Client | null;
  setClient: React.Dispatch<React.SetStateAction<Client | null>>;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const useClient = (): ClientContextType => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('useClient must be used within an ClientProvider');
  }
  return context;
};

interface ClientProviderProps {
  children: React.ReactNode;
}

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const [client, setClient] = useState<Client | null>(() => {
    // Retrieve the client from localStorage if it exists
    const storedClient = localStorage.getItem('client');
    return storedClient ? JSON.parse(storedClient) : null;
  });

  useEffect(() => {
    // Save the client to localStorage whenever it changes
    if (client !== null) {
      localStorage.setItem('client', JSON.stringify(client));
    } else {
      localStorage.removeItem('client');
    }
  }, [client]);

  // The value that will be provided to any descendant components
  const value: ClientContextType = { client, setClient };

  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
};
