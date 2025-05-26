import { useEffect, useState } from "react";
import supabase from "../../../supabase";
import ReservationList from "./ReservationList";

const titleItems = {
  name: "예약자명",
  event_date: "이벤트 날짜",
  service_time: "서비스 시간",
  location: "서비스 장소",
  whatsapp: "번호", // TODO: 나중에 whatsapp이 아니라 phone_number로 바꿀 것
  status: "예약 상태",
  created_at: "생성일(한국 기준)",
  seemore: "더보기/수정",
};

export default function ReservationContent({
  selectedTabTitle,
  selectedTabLabel,
}) {
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      let query = supabase
        .from("reservations")
        .select("*")
        .order("created_at", { ascending: false });

      if (selectedTabLabel === "confirmed") {
        query = query.eq("status", "confirmed");
      } else if (selectedTabLabel === "unconfirmed") {
        query = query.eq("status", "unconfirmed");
      }

      const { data, error } = await query;

      if (error) {
        alert("불러오기 실패: " + error.message);
      } else {
        setReservationData(data);
      }
    }

    fetchReservations();
  }, [selectedTabLabel]);

  return (
    <section
      role="tabpanel"
      id={`tabpanel-${selectedTabLabel}`}
      aria-labelledby={`tab-${selectedTabLabel}`}
      className="flex h-[43rem] w-full flex-col justify-between rounded-xl bg-white p-8 text-black"
    >
      <div className="flex flex-col gap-5">
        <header className="text-lg font-medium">{selectedTabTitle}</header>
        {/* //TODO: 서치컴포넌트 들어갈 예정 */}
        <div role="search">검색바</div>
        <div className="flex w-full items-center gap-2 text-base font-medium text-gray-400">
          {Object.entries(titleItems).map(([key, title]) => (
            <div key={key} className="shrink-0 grow basis-0">
              {title}
            </div>
          ))}
        </div>
        <ReservationList reservationData={reservationData} />
      </div>

      <footer className="flex w-full items-center justify-between">
        <div className="text-base font-normal text-[#4763E4]">
          총 예약: {reservationData.length ?? 0}건
        </div>
        <nav>페이지네이션 컴포넌트</nav>
      </footer>
    </section>
  );
}
