import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition duration-200 hover:text-red-300 ${isActive ? "text-red-400" : "text-slate-300"}`;

  return (
    <nav className="border-b border-slate-800 bg-slate-950 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-lg font-bold text-red-400">Student Portal</Link>
        <div className="flex gap-6 text-sm font-medium">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/students" className={linkClass}>Students</NavLink>
          <NavLink to="/faculties" className={linkClass}>Faculty</NavLink>
        </div>
      </div>
    </nav>
  );
}