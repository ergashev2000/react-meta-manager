import React, { createContext, useContext, ReactNode, useMemo } from 'react';

interface MetaContextProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
  keywords?: string[];
  author?: string;
  favicon?: string;
  icon?: string;
  twitterCreator?: string;
}

const defaultMetaContext: MetaContextProps = {
  title: '',
  description: '',
  url: '',
  ogImage: '',
  keywords: [],
  author: '',
  favicon: '',
  icon: '',
  twitterCreator: '',
};

const MetaContext = createContext<MetaContextProps>(defaultMetaContext);

export const MetaProvider: React.FC<{ 
  children: ReactNode; 
  defaults?: MetaContextProps;
}> = ({ children, defaults = {} }) => {
  const contextValue = useMemo(() => ({
    ...defaultMetaContext,
    ...defaults
  }), [defaults]);

  return (
    <MetaContext.Provider value={contextValue}>
      {children}
    </MetaContext.Provider>
  );
};

export const useMetaContext = () => useContext(MetaContext);
