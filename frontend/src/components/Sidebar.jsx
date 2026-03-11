import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Sidebar() {

  var location = useLocation();
  var navigate = useNavigate();
  var { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <aside className="fixed top-0 left-0 w-56 h-screen bg-bg-nav border-r border-cyan/12 flex flex-col z-40">

      <div className="px-5 py-6 border-b border-cyan/10">
        <Link to="/" className="font-orbitron text-lg font-black tracking-widest uppercase text-white no-underline">
          CyberF1ve
        </Link>
      </div>

      <div className="flex-1 py-4 flex flex-col gap-1">

        <Link
          to="/dashboard"
          className={`flex items-center gap-3 px-5 py-3 font-orbitron text-sm font-semibold no-underline border-l-2 transition-all
            ${location.pathname === '/dashboard' ? 'text-cyan bg-cyan/8 border-l-cyan' : 'text-white/50 border-l-transparent hover:text-white hover:bg-cyan/5'}`}
        >
          📊 Overview
        </Link>

        <Link
          to="/anomalies"
          className={`flex items-center gap-3 px-5 py-3 font-orbitron text-sm font-semibold no-underline border-l-2 transition-all
            ${location.pathname === '/anomalies' ? 'text-cyan bg-cyan/8 border-l-cyan' : 'text-white/50 border-l-transparent hover:text-white hover:bg-cyan/5'}`}
        >
          🚨 Anomalies
        </Link>

        <Link
          to="/about"
          className={`flex items-center gap-3 px-5 py-3 font-orbitron text-sm font-semibold no-underline border-l-2 transition-all
            ${location.pathname === '/about' ? 'text-cyan bg-cyan/8 border-l-cyan' : 'text-white/50 border-l-transparent hover:text-white hover:bg-cyan/5'}`}
        >
          📋 About
        </Link>

      </div>

      <div className="px-5 py-4 border-t border-cyan/10">

        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan to-blue-500 flex items-center justify-center font-orbitron text-sm font-bold text-bg-dark">
            {user && user.name ? user.name[0].toUpperCase() : 'U'}
          </div>
          <div>
            <p className="font-orbitron text-sm font-semibold text-white m-0">{user ? user.name : 'User'}</p>
            <p className="font-orbitron text-xs text-white/40 m-0">Admin</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full font-orbitron text-xs font-bold text-white/50 border border-white/20 bg-transparent px-3 py-2 rounded-xl cursor-pointer hover:text-white hover:border-white/50"
        >
          Log Out
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;