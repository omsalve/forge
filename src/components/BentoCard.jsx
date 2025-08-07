export default function BentoCard({ title, description, icon, onClick, className = "", style = {} }) {
  return (
    <div
      onClick={onClick}
      className={`
        m-4 rounded-2xl p-5 min-h-[200px]
        flex flex-col justify-between 
        bg-white/5 backdrop-blur-md border border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.2)]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]
        transition-all duration-300 ease-in-out cursor-pointer
        opacity-100
        ${className}
      `}
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
