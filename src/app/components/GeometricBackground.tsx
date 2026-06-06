export default function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 140, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 140, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Polygons */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-orange-500/30 rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-orange-500/20 rotate-12"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-orange-500/20 -rotate-12"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 border border-orange-500/30 rotate-45"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
    </div>
  );
}
