export default function Meteors() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute top-0 left-0 w-[2px] h-[80px]
                     bg-gradient-to-b from-white/80 to-transparent
                     animate-meteor"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
}
