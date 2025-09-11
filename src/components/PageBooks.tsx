import { useContext } from 'react';
import { AppContext } from './AppContext';

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
