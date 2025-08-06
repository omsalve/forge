export default function BentoCard({ title, description, icon, onClick, className = "", style = {} }) {
  return (
    <div
      onClick={onClick}
      className={`m-4 rounded-2xl bg-white/5 p-5 min-h-[200px] flex flex-col justify-between ${className}`}
      style={style}
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-white/80">{icon}</div>}
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
      {description && (
        <p className="text-white/60 text-sm mt-3">{description}</p>
      )}
    </div>
  );
}
