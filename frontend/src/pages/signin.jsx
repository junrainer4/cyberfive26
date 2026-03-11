import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSignin(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }

    setLoading(false);
  }

  return (
    <div className="relative min-h-screen bg-[#0b1a35] text-white flex flex-col overflow-hidden">

      <div
        className="absolute inset-0 opacity-80 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/logo2.png)' }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen">

        <nav className="flex items-center justify-start gap-10 px-10 pt-9 pb-2 min-h-[80px]">

          <Link
            to="/"
            className="font-['Orbitron'] text-[1.7rem] font-medium text-white no-underline pb-2 hover:text-cyan-400"
          >
            CyberF1ve
          </Link>

          <ul className="flex gap-8 list-none m-0 p-0 items-center">
            <li>
              <Link to="/" className="font-['Orbitron'] text-lg font-semibold text-white no-underline hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-['Orbitron'] text-lg font-semibold text-white no-underline hover:text-cyan-400">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="font-['Orbitron'] text-lg font-semibold text-white no-underline hover:text-cyan-400">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="#" className="font-['Orbitron'] text-lg font-semibold text-white no-underline hover:text-cyan-400">
                Contact us
              </Link>
            </li>
          </ul>

          <Link
            to="/login"
            className="font-['Orbitron'] text-lg font-bold text-cyan-400 border-2 border-cyan-400 px-8 py-2 rounded-full no-underline ml-auto transition-colors duration-200 hover:bg-cyan-400/10"
          >
            Sign in
          </Link>

        </nav>

        <div className="flex flex-1 gap-0">

          <div className="w-[45%] flex items-center justify-center px-16 py-10">
            <div className="w-full max-w-[420px]">

              <img
                src="usericon2.png"
                alt="user icon"
                className="w-[200px] h-[200px] mx-auto mb-3 block"
              />

              <h2 className="font-['Orbitron'] text-[2.8rem] font-medium text-center text-white mb-7">
                Sign In
              </h2>

              {error && (
                <p className="font-['Rajdhani'] text-[0.9rem] text-red-400 text-center mb-3">
                  {error}
                </p>
              )}

              <form onSubmit={handleSignin}>

                <div className="flex items-center border border-white/30 rounded-full px-5 py-3 mb-4 bg-transparent">
                  <img src="usericon3.png" alt="user" className="w-5 h-5 mr-2.5 opacity-60" />
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="flex-1 bg-transparent border-none outline-none text-white font-['Orbitron'] text-[0.95rem] placeholder-white/40"
                  />
                </div>

                <div className="flex items-center border border-white/30 rounded-full px-5 py-3 mb-4 bg-transparent">
                  <img src="lock1.png" alt="lock" className="w-5 h-5 mr-2.5 opacity-60" />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="flex-1 bg-transparent border-none outline-none text-white font-['Orbitron'] text-[0.95rem] placeholder-white/40"
                  />
                </div>

                <div className="flex justify-between items-center mb-5 font-['Orbitron'] text-[0.75rem] text-white/50">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="text-white/50 no-underline hover:text-white">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-amber-400 text-white font-['Orbitron'] text-[1.1rem] font-bold border-none rounded-full py-3.5 cursor-pointer transition-opacity duration-200 hover:opacity-85 disabled:opacity-60"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>

              </form>

              <p className="font-['Orbitron'] text-[0.8rem] text-white/50 text-center mt-5">
                don't have an account?{' '}
                <Link to="/signup" className="text-white font-bold text-base no-underline hover:underline">
                  Sign up
                </Link>
              </p>

            </div>
          </div>

          <img src="/shadow1.png" alt="divider" className="w-30 self-stretch object-fill flex-shrink-0" />

          <div className="w-[55%] flex items-center justify-center px-16 py-10 pb-24">
            <div className="max-w-[560px]">
              <h1 className="font-['Orbitron'] text-[7rem] font-medium text-white mb-6 leading-none">
                Welcome
              </h1>
              <p
                className="font-['Orbitron'] text-base text-white leading-8 italic text-justify tracking-[0.05em] w-full pl-10"
                style={{ wordSpacing: '0.3em', textAlignLast: 'left' }}
              >
                AI-powered Intrusion Detection System (IDS) designed to monitor,
                analyze, and detect malicious network behavior in real time.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signin;