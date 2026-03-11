import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="relative min-h-screen h-screen bg-[#0b1a35] text-white flex flex-col overflow-hidden">

      <div
        className="absolute inset-0 opacity-80 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/logo2.png)' }}
      ></div>

      <div className="relative z-10 flex flex-col min-h-screen">

        <nav className="flex items-center justify-start gap-10 px-10 pt-9 pb-4">
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
              <Link
                to="/about"
                className="font-['Orbitron'] text-lg font-semibold text-cyan-400 no-underline border-b-2 border-cyan-400 pb-0.5"
              >
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
        </nav>

        <div className="flex items-center flex-1 px-20 py-10 gap-16">

          <div className="w-[60%] flex flex-col items-center justify-center gap-0 -mt-[90px]">
            <img
              src="/final-logo-cyfive-1.png"
              alt="CyF1ve logo"
              className="w-[600px] h-auto object-contain"
            />
            <h1 className="font-['Orbitron'] text-[7rem] font-normal text-white -mt-[70px] text-center pr-[75px]">
              CyF1ve
            </h1>
          </div>

          <div className="w-[60%] flex flex-col gap-6">
            <img
              src="/grouppicture.jpg"
              alt="CyF1ve team"
              className="w-full max-w-full h-[360px] object-cover object-bottom rounded-lg"
            />
            <p className="font-['Poppins'] text-base text-white leading-8 text-justify tracking-wide" style={{ wordSpacing: '0.2em' }}>
              We are a team of cybersecurity professionals dedicated to
              advancing modern threat detection through innovation and
              research. As part of our capstone project, we are developing an
              AI-powered Intrusion Detection System (IDS) designed to identify,
              analyze, and respond to malicious activity with greater accuracy
              and speed than traditional approaches. By combining
              cybersecurity fundamentals with machine learning techniques,
              our goal is to enhance network visibility, reduce false positives,
              and strengthen defenses against evolving cyber threats. Our
              work reflects a commitment to building practical, intelligent
              security solutions for today's complex digital environments.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;