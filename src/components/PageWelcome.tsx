import { useContext } from 'react';
import { AppContext } from './AppContext';

export const PageWelcome = () => {
  const { books } = useContext(AppContext);
  return (
    <div className="pageWelcome">
      <p>Welcome to this site.</p>
      <div className="welcomePage">
        {books.length === 0 ? (
          <p className="loading"><span>Loading...</span></p>
        ) : (
          <p className="club">
            In our club we are reading <span>{books.length}</span> books.
          </p>
        )}
      </div>
    </div>
  );
};
