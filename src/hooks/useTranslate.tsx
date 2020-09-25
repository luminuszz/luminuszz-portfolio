import React, { useContext, createContext } from 'react';

const TranslateContext = createContext({});

const TranslateProvider: React.FC = ({ children }) => {
  return (
    <TranslateContext.Provider value={{}}>{children}</TranslateContext.Provider>
  );
};

function useTranslate(): Record<string, any> {
  const context = useContext(TranslateContext);

  if (!context) {
    throw new Error('useTranslate must to me used inside TranslateProvider');
  }

  return context;
}

export { TranslateProvider, useTranslate };
