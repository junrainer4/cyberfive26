import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      await register(name, email, password);
      navigate('/welcome');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }

    setLoading(false);
  }

  return (
    <div className="h-screen max-h-screen bg-[#0b1a35] text-white flex flex-col relative overflow-hidden">

      <div
        className="absolute inset-0 opacity-80 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/logo2.png)' }}
      ></div>

      <div className="relative z-10 flex flex-col h-screen overflow-hidden">

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
            to="/signup"
            className="font-['Orbitron'] text-lg font-bold text-cyan-400 border-2 border-cyan-400 px-[28.5px] py-2 rounded-full no-underline ml-auto transition-colors duration-200 hover:bg-cyan-400/10"
          >
            Sign up
          </Link>

        </nav>

        <div className="flex flex-1 gap-0 overflow-hidden">

          <div className="w-[60%] flex items-center justify-center px-16 py-10 pb-24 relative">
            <div className="max-w-[560px]">

              <h1 className="font-['Orbitron'] text-[7rem] font-normal text-white mb-6 leading-none">
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

            <p className="font-['Orbitron'] text-[0.8rem] text-white/50 text-center absolute bottom-[95px] left-0 right-0">
              already have an account?{' '}
              <Link to="/login" className="text-white font-bold text-base no-underline hover:underline">
                Sign in
              </Link>
            </p>

          </div>

          <img src="shadow1.png" alt="divider" className="w-30 self-stretch object-fill flex-shrink-0" />

          <div className="w-[45%] flex items-center justify-center px-16 py-5">
            <div className="w-full max-w-[420px]">

              <img
                src="usericon1.png"
                alt="user icon"
                className="w-[200px] h-[200px] mx-auto mb-2 block"
              />

              <h2 className="font-['Orbitron'] text-[2.8rem] font-semibold text-center text-white mb-4">
                Create Account
              </h2>

              {error && (
                <p className="font-['Rajdhani'] text-[0.9rem] text-red-400 text-center mb-3">
                  {error}
                </p>
              )}

              <form onSubmit={handleSignup}>

                <div className="flex items-center border border-white/30 rounded-full px-5 py-2.5 mb-2.5 bg-transparent">
                  <img src="email1.png" alt="email" className="w-5 h-5 mr-2.5 opacity-60" />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-transparent border-none outline-none text-white font-['Orbitron'] text-[0.95rem] placeholder-white/40"
                  />
                </div>

                <div className="flex items-center border border-white/30 rounded-full px-5 py-2.5 mb-2.5 bg-transparent">
                  <img src="usericon3.png" alt="user" className="w-5 h-5 mr-2.5 opacity-60" />
                  <input
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="flex-1 bg-transparent border-none outline-none text-white font-['Orbitron'] text-[0.95rem] placeholder-white/40"
                  />
                </div>

                <div className="flex items-center border border-white/30 rounded-full px-5 py-2.5 mb-2.5 bg-transparent">
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

                <div className="flex items-center border border-white/30 rounded-full px-5 py-2.5 mb-2.5 bg-transparent">
                  <img src="lock1.png" alt="lock" className="w-5 h-5 mr-2.5 opacity-60" />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="flex-1 bg-transparent border-none outline-none text-white font-['Orbitron'] text-[0.95rem] placeholder-white/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#ff6b00] to-amber-400 text-white font-['Orbitron'] text-[1.1rem] font-bold border-none rounded-full py-3 cursor-pointer mt-1 transition-opacity duration-200 hover:opacity-85 disabled:opacity-60"
                >
                  {loading ? 'Creating account...' : 'Sign Up'}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Signup;