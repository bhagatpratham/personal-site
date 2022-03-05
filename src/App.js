import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Links from "./components/Links";
import Setup from "./components/Setup";
import Summaries from "./components/Summaries";
import Projects from "./components/Projects";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <nav className="nav-links">
          <ul>
            <li className="name">Pratham Bhagat</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/summaries">Summaries</Link>
            </li>
            <li>
              <Link to="/setup">Setup</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/links" element={<Links />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/summaries" element={<Summaries />} />
          <Route path="/setup" element={<Setup />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
