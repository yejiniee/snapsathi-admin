import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <aside className="flex h-full flex-col items-start gap-8 bg-[#0E1B6B]">
        <header className="flex w-full shrink-0 items-center justify-center p-2 text-white">
          <img src="./src/assets/logo.png"></img>
        </header>
        <nav className="flex flex-col items-start justify-center gap-6 p-5 text-white">
          <button onClick={() => navigate("/reservation")}>예약 목록</button>
          <button onClick={() => navigate("/reservation-inquiry")}>
            고객 문의
          </button>
        </nav>
      </aside>
    </div>
  );
}
