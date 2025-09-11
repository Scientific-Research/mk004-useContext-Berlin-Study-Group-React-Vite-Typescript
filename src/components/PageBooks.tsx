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
    <div className="pageBooks">
      {books.map((book) => (
        <div className="pageBook">
          <img
            src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
            alt=""
          />
          <div className="bookInfo">
            <div className="title">{book.title}</div>
            <div className="description">{book.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
