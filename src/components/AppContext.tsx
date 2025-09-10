import { createContext, ReactNode } from 'react';

interface IAppContext {
  appTitle: string;
  datePartners: string[];
}

const _AppContext = {
  appTitle: '',
  datePartners: ['', ''],
};

interface IAppProvider {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>(_AppContext);

export const AppProvider = ({ children }: IAppProvider) => {
  const appTitle = 'The Berlin Study Group';
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
