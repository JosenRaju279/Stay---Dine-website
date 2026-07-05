export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-[#0E0E0E] flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gold text-3xl font-heading font-bold tracking-wide">Stay</span>
          <span className="text-white/40 text-xl font-light">&</span>
          <span className="text-white text-3xl font-heading font-bold tracking-wide">Dine</span>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
