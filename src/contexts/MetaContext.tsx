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
}

const MetaContext = createContext<MetaContextProps>({});

export const MetaProvider: React.FC<{ 
  children: ReactNode,
  defaults?: MetaContextProps
}> = ({ children, defaults }) => {
  const contextValue = useMemo(() => ({
    title: defaults?.title,
    description: defaults?.description,
    url: defaults?.url,
    ogImage: defaults?.ogImage,
    keywords: defaults?.keywords,
    author: defaults?.author,
    favicon: defaults?.favicon,
    icon: defaults?.icon,
  }), [defaults]);

  return (
    <MetaContext.Provider value={contextValue}>
      {children}
    </MetaContext.Provider>
  );
};

export const useMetaContext = () => useContext(MetaContext);
