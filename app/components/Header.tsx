export default function Header() {
  return (
    <header className="w-full py-6 md:pt: 12 px-8 flex justify-between items-center bg-primaryBg">
      {/* Logo / Name */}
      <h1 className="text-deepNavy font-bold text-xl">Manuela Manuel</h1>

      {/* Navigation */}
      <nav className="hidden md:flex gap-10 text-deepNavy font-medium">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#work" className="hover:underline">Work</a>
      </nav>

      {/* Icons (placeholder shapes like in template) */}
      <div className="flex gap-4 text-deepNavy text-xl">
        <span>●</span>
        <span>◆</span>
        <span>✦</span>
      </div>
    </header>
  );
}
