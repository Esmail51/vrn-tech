export default function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF8C00]/30 via-[#FF6B00]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF8C00]/20 via-transparent to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-transparent via-[#FF8C00]/10 to-transparent rounded-full blur-3xl"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 140, 0, 0.3) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 140, 0, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
    </div>
  );
}
