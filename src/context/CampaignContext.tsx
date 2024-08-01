import React, { createContext, useContext, useEffect, useState } from 'react';

interface CampaignContextType {
  campaign: Campaign | null;
  setCampaign: React.Dispatch<React.SetStateAction<Campaign | null>>;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export const useCampaign = (): CampaignContextType => {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error('useCampaign must be used within a CampaignProvider');
  }
  return context;
};

interface CampaignProviderProps {
  children: React.ReactNode;
}

export const CampaignProvider = ({ children }: CampaignProviderProps) => {
  const [campaign, setCampaign] = useState<Campaign | null>(() => {
    // Retrieve the campaign from localStorage if it exists
    const storedCampaign = localStorage.getItem('campaign');
    return storedCampaign ? JSON.parse(storedCampaign) : null;
  });

  useEffect(() => {
    // Save the campaign to localStorage whenever it changes
    if (campaign !== null) {
      localStorage.setItem('campaign', JSON.stringify(campaign));
    } else {
      localStorage.removeItem('campaign');
    }
  }, [campaign]);

  // The value that will be provided to any descendant components
  const value: CampaignContextType = { campaign, setCampaign };

  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
};
