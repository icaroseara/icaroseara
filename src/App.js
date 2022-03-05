import './App.css';

import avatar from './avatar.png';

import { Routes, Route, Outlet, Link } from "react-router-dom";

import About from './pages/navbar/About';
import Articles from './pages/navbar/Articles';
import Home from './pages/navbar/Home';
import Mentoring from './pages/navbar/Mentoring';
import Podcasts from './pages/navbar/Podcasts';
import Projects from './pages/navbar/Projects';
import Tools from './pages/navbar/Tools';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="Avatar-container">
          <img src={avatar} className="App-avatar" alt="avatar" />
        </div>
        <h2>
          Hey, I'm Icaro Seara, and this is my personal website.
        </h2>
        <div className='App-navbar'>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="articles" element={<Articles />} />
              <Route path="mentoring" element={<Mentoring />} />
              <Route path="podcasts" element={<Podcasts />} />
              <Route path="projects" element={<Projects />} />
              <Route path="tools" element={<Tools />} />
            </Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/mentoring">Mentoring</Link>
          </li>
          <li>
            <Link to="/podcasts">Podcasts</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/tools">Tools</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}