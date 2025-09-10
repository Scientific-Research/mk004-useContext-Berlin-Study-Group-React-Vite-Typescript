import { useState, useEffect, createContext, ReactNode } from 'react';
import axios from 'axios';

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

const booksURl = 'https://edwardtanguay.vercel.app/share/techBooks.json';

export const AppContext = createContext<IAppContext>(_AppContext);

export const AppProvider = ({ children }: IAppProvider) => {
  const appTitle = 'The Berlin Study Group';
  const datePartners = ['Mary', 'Miriam'];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = (await axios.get(booksURl)).data;
      console.log(response);
    })();
  }, []);

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
