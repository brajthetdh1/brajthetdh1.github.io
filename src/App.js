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
        <div className="bg-slate-50/80 text-slate-800 min-h-screen flex flex-col">
          {/* Navbar */}
          <Nav />

          {/* Main content */}
          <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
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
