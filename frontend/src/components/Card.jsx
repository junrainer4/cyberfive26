function Card({ title, value, subtitle, icon, variant }) {
  let valueColor = 'text-cyan';
  let borderColor = 'border-cyan/15';

  if (variant === 'danger') {
    valueColor = 'text-red-400';
    borderColor = 'border-red-500/25';
  }

  if (variant === 'warning') {
    valueColor = 'text-orange';
    borderColor = 'border-orange/25';
  }

  return (
    <div className={`bg-bg-card border rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 ${borderColor}`}>
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        {title && <h3 className="font-orbitron text-xs font-bold tracking-widest uppercase text-slate-400 m-0">{title}</h3>}
      </div>
      {value && <div className={`font-orbitron text-3xl font-black tracking-widest mb-1 ${valueColor}`}>{value}</div>}
      {subtitle && <p className="font-rajdhani text-xs text-slate-400 m-0 uppercase tracking-wide">{subtitle}</p>}
    </div>
  );
}

export default Card;