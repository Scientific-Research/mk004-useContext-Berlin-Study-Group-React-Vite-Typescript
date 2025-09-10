import { useState, useEffect, createContext, ReactNode } from 'react';
import axios from 'axios';

interface IBook {
  id: number;
  idCode: string;
  title: string;
  description: string;
  language: string;
}

interface IAppContext {
  appTitle: string;
  datePartners: string[];
  books: IBook[];
}

const _defaultContext = {
  appTitle: '',
  datePartners: [],
  books: [],
};

interface IAppProvider {
  children: ReactNode;
}

const booksURl = 'https://edwardtanguay.vercel.app/share/techBooks.json';

export const AppContext = createContext<IAppContext>(_defaultContext);

export const AppProvider = ({ children }: IAppProvider) => {
  const appTitle = 'The Berlin Study Group';
  const datePartners = ['Mary', 'Miriam'];

  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = (await axios.get(booksURl)).data;
        setBooks(response);
        console.log(books);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        appTitle,
        datePartners,
        books,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
