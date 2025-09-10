// import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Berlin-Study-Group</h1>

      <nav>
        <NavLink to="welcome">Welcome</NavLink>
        <NavLink to="info">Info</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>

      <Routes>{/* <Route path='welcome' element={<Page/>}></Route> */}</Routes>
      <h3>welcome to this site.</h3>
    </div>
  );
}

export default App;
