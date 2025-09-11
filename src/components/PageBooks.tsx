import { useContext } from 'react';
import { AppContext } from './AppContext';

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

export const PageBooks = () => {
  const { books } = useContext(AppContext);
  return (
    <>
      <p>Welcome to the Books page.</p>
      {books.map((b) => console.log(b.title))}
    </>
  );
};
