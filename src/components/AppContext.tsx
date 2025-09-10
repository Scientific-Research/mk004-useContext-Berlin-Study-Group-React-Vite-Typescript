import { createContext, ReactNode } from 'react';

interface IAppContext {
  appTitle: string;
  datePartners: string[];
}

interface IAppProvider {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: IAppProvider) => {
  const appTitle = 'The Study Group';
  const datePartners = ['Mary', 'Miriam'];

  return (
    <AppContext.Provider
      value={{
        appTitle,
        datePartners,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
