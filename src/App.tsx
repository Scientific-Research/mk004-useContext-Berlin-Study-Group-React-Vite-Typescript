// import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { PageWelcome } from './components/PageWelcome';
import { PageInfo } from './components/PageInfo';
import { PageAbout } from './components/PageAbout';

function App() {
  return (
    <div className="App">
      <h1>Berlin-Study-Group</h1>

      <nav>
        <NavLink to="welcome">Welcome</NavLink>
        <NavLink to="info">Info</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>

      <Routes>
        <Route path="welcome" element={<PageWelcome />}></Route>
        <Route path="info" element={<PageInfo />}></Route>
        <Route path="about" element={<PageAbout />}></Route>
      </Routes>

      {/* <h3>welcome to this site.</h3> */}
    </div>
  );
}

export default App;
