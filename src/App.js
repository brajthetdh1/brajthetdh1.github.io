import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import About from "./pages/About";
import HireMe from "./pages/Hireme";
import Layout from "./Layout";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Layout>
        <div className="bg-slate-50/80 text-slate-800 min-h-screen flex">
          {/* Navbar */}
          <Nav />

          {/* Main content */}
          <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/about" element={<About />} />
              <Route path="/hire-me" element={<HireMe />} />
            </Routes>
          </main>

          
        </div>
      </Layout>
    </Router>
  );
}

export default App;
