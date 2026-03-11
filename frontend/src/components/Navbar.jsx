import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {

  var [menuOpen, setMenuOpen] = useState(false);
  var { user, logout } = useAuth();
  var navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-bg-nav border-b border-cyan/15 sticky top-0 z-50">

      <Link to="/" className="font-orbitron text-xl font-black tracking-widest uppercase text-white no-underline">
        CyberF1ve
      </Link>

      <ul className="hidden md:flex gap-9 list-none m-0 p-0">
        <li><Link to="/" className="font-orbitron text-sm font-semibold text-white no-underline hover:text-cyan">Home</Link></li>
        <li><Link to="/about" className="font-orbitron text-sm font-semibold text-white no-underline hover:text-cyan">About us</Link></li>
        <li><Link to="#" className="font-orbitron text-sm font-semibold text-white no-underline hover:text-cyan">Pricing</Link></li>
        <li><Link to="#" className="font-orbitron text-sm font-semibold text-white no-underline hover:text-cyan">Contact us</Link></li>
      </ul>

      <div className="hidden md:flex gap-3">

        {user ? (
          <div className="flex gap-3">
            <Link to="/dashboard" className="font-orbitron text-sm font-bold text-cyan border-2 border-cyan px-8 py-2 rounded-full no-underline hover:bg-cyan/10">
              Dashboard
            </Link>
            <button onClick={handleLogout} className="font-orbitron text-sm font-bold text-white bg-gradient-to-r from-orange to-amber-500 border-none px-8 py-2 rounded-full cursor-pointer hover:opacity-85">
              Log Out
            </button>
          </div>

        ) : (

          <div className="flex gap-3">
            <Link to="/login" className="font-orbitron text-sm font-bold text-cyan border-2 border-cyan px-8 py-2 rounded-full no-underline hover:bg-cyan/10">
              Sign In
            </Link>
            <Link to="/signup" className="font-orbitron text-sm font-bold text-white bg-gradient-to-r from-orange to-amber-500 px-8 py-2 rounded-full no-underline hover:opacity-85">
              Sign Up
            </Link>
          </div>

        )}

      </div>

      <button
        className="md:hidden bg-transparent border-none cursor-pointer flex flex-col gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-0.5 bg-cyan"></span>
        <span className="block w-6 h-0.5 bg-cyan"></span>
        <span className="block w-6 h-0.5 bg-cyan"></span>
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-bg-dark border-b border-cyan/15 flex flex-col gap-4 p-6 md:hidden">
          <Link to="/" className="font-orbitron text-sm text-white no-underline hover:text-cyan">Home</Link>
          <Link to="/about" className="font-orbitron text-sm text-white no-underline hover:text-cyan">About us</Link>
          <Link to="#" className="font-orbitron text-sm text-white no-underline hover:text-cyan">Pricing</Link>
          <Link to="#" className="font-orbitron text-sm text-white no-underline hover:text-cyan">Contact us</Link>
          <Link to="/login" className="font-orbitron text-sm text-cyan border border-cyan text-center py-2 no-underline rounded-full">Sign In</Link>
          <Link to="/signup" className="font-orbitron text-sm text-white bg-gradient-to-r from-orange to-amber-500 text-center py-2 no-underline rounded-full">Sign Up</Link>
        </div>
      )}

    </nav>
  );
}

export default Navbar;