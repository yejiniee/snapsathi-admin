export default function Header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between bg-white px-10 py-7">
      <nav aria-label="현재 위치" className="flex flex-row items-center gap-2">
        <span>SNAPSATHI</span>
        <span>&gt;</span>
        <span>예약 목록</span>
      </nav>
      {/* //TODO: 사용자 아이콘으로 대체 */}
      <div>사용자</div>
    </header>
  );
}
