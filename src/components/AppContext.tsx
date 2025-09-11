import { useState, useEffect, createContext, ReactNode } from 'react';
import axios from 'axios';

import { IBook, IAppContext, IAppProvider } from '../Interfaces';

const _defaultContext = {
  appTitle: '',
  datePartners: [],
  books: [],
};

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
      } catch (error) {
        console.error('Error fetching books', error);
      }
    })();
  }, []);

  // Wenn du sehen willst, wann books wirklich aktualisiert wurde, kannst du einen zweiten useEffect verwenden:
  useEffect(() => {
    (() => {
      console.log('Books wurden geladen', books);
    })();
  }, [books]);
  // Dieser Effekt wird nur ausgeführt, wenn sich books ändert — also nach dem erfolgreichen setBooks().

  // console.log(books);

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
