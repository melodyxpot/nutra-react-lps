import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the types for the loader context
interface LoaderContextType {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context for the loader state
const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function useLoader(): LoaderContextType {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
}

interface LoaderProviderProps {
    children: ReactNode;
}

export const LoaderProvider = ({ children }: LoaderProviderProps) => {
    const [loading, setLoading] = useState(false);

    // The value that will be provided to any descendant components
    const value: LoaderContextType = { loading, setLoading };

    return (
        <LoaderContext.Provider value={value}>
            {children}
        </LoaderContext.Provider>
    );
};
