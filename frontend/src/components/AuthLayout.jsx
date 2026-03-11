function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-bg-dark">

      <div className="flex-1 hidden md:flex items-center justify-center bg-gradient-to-br from-bg-nav to-[#0d2040] relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent)]" />


        <div className="relative text-center max-w-sm px-8">

          <div className="font-orbitron text-5xl font-black tracking-widest uppercase text-white mb-6">
            CyberF1ve
          </div>

          <p className="font-orbitron text-sm text-white/40 leading-relaxed">
            A powerful Intrusion Detection System for Organizations and Businesses.
            Designed to detect, analyze and alert threats in real time.
          </p>

        </div>

      </div>

      <div className="w-full md:w-[480px] flex items-center justify-center px-8 py-16 border-l border-cyan/12">
        <div className="w-full max-w-sm">
          {children}
        </div>
      </div>

    </div>
  );
}

export default AuthLayout;