export default function SiteBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[420px] bg-blue-500/[0.09] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[320px] bg-cyan-500/[0.05] blur-[100px] rounded-full" />
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}
