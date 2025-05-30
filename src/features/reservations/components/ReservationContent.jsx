import SearchBar from "@components/SearchBar";
import useSearchFilter from "@hooks/useSearchFilter";
import useGetReservations from "../hooks/useGetReservations";
import ReservationList from "./ReservationList";
import ReservationModal from "./ReservationModal";

const titleItems = {
  name: "예약자명",
  event_date: "이벤트 날짜",
  service_time: "서비스 시간",
  location: "서비스 장소",
  whatsapp: "번호", // TODO: 나중에 whatsapp이 아니라 phone_number로 바꿀 것
  status: "예약 상태",
  created_at: "생성일(한국 기준)",
};

export default function ReservationContent({
  selectedTabTitle,
  selectedTabLabel,
}) {
  const {
    data: reservationData = [],
    isLoading,
    isError,
    error,
  } = useGetReservations(selectedTabLabel);

  const {
    searchKeyword,
    handleSearchInputChange,
    filteredData: filteredReservations,
  } = useSearchFilter(reservationData);

  if (isError) {
    return (
      <div role="alert">
        예약 목록을 불러오는 데 실패했습니다: {error.message}
      </div>
    );
  }

  return (
    <section
      role="tabpanel"
      id={`tabpanel-${selectedTabLabel}`}
      aria-labelledby={`tab-${selectedTabLabel}`}
      className="flex h-[43rem] w-full flex-col justify-between rounded-xl bg-white p-8 text-black"
    >
      <div className="flex flex-col gap-5">
        <header className="text-lg font-medium">{selectedTabTitle}</header>
        <SearchBar
          inputValue={searchKeyword}
          onChange={handleSearchInputChange}
        />
        <div className="flex flex-col">
          <div className="flex w-full items-center gap-2 text-base font-medium text-gray-400">
            {Object.entries(titleItems).map(([key, title]) => (
              <div key={key} className="shrink-0 grow basis-0">
                {title}
              </div>
            ))}
          </div>
          {isLoading ? (
            <div className="py-8 text-center">예약 목록을 불러오는 중…</div>
          ) : (
            <ReservationList reservationData={filteredReservations} />
          )}
        </div>
      </div>

      <footer className="flex w-full items-center justify-between">
        <div className="text-base font-normal text-[#4763E4]">
          총 예약: {reservationData.length ?? 0}건
        </div>
        <nav>페이지네이션 컴포넌트</nav>
      </footer>

      <ReservationModal />
    </section>
  );
}
