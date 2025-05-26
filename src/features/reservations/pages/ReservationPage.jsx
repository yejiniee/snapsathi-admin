import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import ReservationContent from "../components/ReservationContent";

export default function ReservationPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex flex-grow flex-col">
        <Header title="예약 관리" />
        <main className="flex flex-col gap-5 px-10 pt-5">
          <h1 className="text-[2rem] font-semibold text-black">예약 관리</h1>
          {/* // TODO: 탭 컴포넌트 */}
          <nav>탭 목록(전체/확약/미확약)</nav>
          <ReservationContent />
        </main>
      </div>
    </div>
  );
}
