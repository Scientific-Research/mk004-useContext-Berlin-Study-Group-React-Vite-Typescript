// import './App.css';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { PageWelcome } from './components/PageWelcome';
import { PageBooks } from './components/PageBooks';
import { PageFlashcards } from './components/PageFlashcards';

function App() {
  return (
    <div className="App">
      <h1>Berlin-Study-Group</h1>

      <nav>
        <NavLink to="welcome">Welcome</NavLink>
        <NavLink to="books">Books</NavLink>
        <NavLink to="flashcards">Flashcards</NavLink>
      </nav>

      <Routes>
        <Route path="welcome" element={<PageWelcome />}></Route>
        <Route path="books" element={<PageBooks />}></Route>
        <Route path="flashcards" element={<PageFlashcards />}></Route>
        <Route path="/" element={<Navigate to="welcome" />}></Route>
      </Routes>

      {/* <h3>welcome to this site.</h3> */}
    </div>
  );
}

export default App;
