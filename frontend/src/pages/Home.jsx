import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [domain, setDomain] = useState('');

  function handleScan(e) {
    e.preventDefault();
    alert('Scanning: ' + domain);
  }

  return (
    <div className="relative min-h-screen bg-[#0b1a35] text-white flex flex-col overflow-hidden">

      <div
        className="absolute inset-0 opacity-80 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/logo2.png)' }}
      ></div>

      <div className="relative z-10">

        <nav className="flex items-center justify-start gap-0 px-10 py-2 ml-px">

          <Link to="/" className="flex items-center -ml-14 -mb-8 no-underline">
            <img src="/final-logo-cyfive-1.png" alt="logo" className="w-[208px] h-auto object-contain" />
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

        <div className="flex items-center px-20 gap-10 flex-1">

          <div className="w-1/2">

            <h1 className="font-['Orbitron'] text-[9rem] font-normal leading-none mb-8">
              CyF1ve
            </h1>

            <form
              className="flex items-center border-2 border-cyan-400/60 rounded-full px-6 py-3 mb-10 max-w-xl bg-transparent"
              onSubmit={handleScan}
            >
              <input
                type="text"
                placeholder="Enter your domain / IP"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white font-['Orbitron'] text-base placeholder-slate-400"
              />
              <button type="submit" className="bg-transparent border-none cursor-pointer ml-2">
                <img src="/search-logo.png" alt="search" className="w-6 h-6" />
              </button>
            </form>

            <div className="max-w-xl text-center">
              <p className="font-['Orbitron'] text-5xl font-normal text-white m-0 tracking-[0.05em]">
                3,453,661
              </p>
              <p className="font-['Orbitron'] text-[1.1rem] font-bold text-[#ff6b00] mt-1 mb-0 tracking-[0.2em]">
                SCANS
              </p>
            </div>

          </div>

          <div className="w-1/2 flex justify-center relative z-20">
            <img src="/logo1.png" alt="Cyber security illustration" className="w-full max-w-xl" />
          </div>

        </div>

        <div className="px-20 mb-12 flex justify-center">
          <div className="bg-[rgba(15,32,68,0.7)] border border-white/10 rounded-2xl px-12 py-5 text-center">
            <p className="font-['Orbitron'] text-lg text-slate-200 tracking-[0.1em] m-0 font-semibold">
              "You breach. We detect".
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;