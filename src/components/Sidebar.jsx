export default function Sidebar() {
  return (
    <aside className="flex h-screen flex-col items-start gap-8 bg-[#0E1B6B]">
      <header className="flex w-full shrink-0 items-center justify-center p-2 text-white">
        <img src="./src/assets/logo.png"></img>
      </header>
      {/* //TODO 사이트 목록 */}
      <nav className="flex flex-col items-start justify-center gap-6 p-5 text-white">
        <button>SNAPSATHI</button>
        <button>다른 사이트</button>
      </nav>
    </aside>
  );
}
