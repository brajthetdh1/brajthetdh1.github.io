

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-2xl px-8 py-4">
        <nav className="flex items-center gap-6 text-slate-800 font-medium">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/skills" className="hover:text-indigo-600">Skills</Link>
          <Link to="/projects" className="hover:text-indigo-600">Projects</Link>
          <Link to="/experience" className="hover:text-indigo-600">Experience</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/hire-me" className="hover:text-indigo-600">Hire Me</Link>
        </nav>
      </div>
    </header>
  );
}
