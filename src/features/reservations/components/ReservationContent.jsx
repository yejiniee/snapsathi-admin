import ReservationList from "./ReservationList";

const mockData = [
  {
    id: 1,
    name: "홍길동",
    whatsapp: "01012345678",
    event_date: "2025-06-01",
    location: "서울 강남구",
    service_time: "14:00",
    theme: "로맨틱",
    event_name: "돌잔치",
    photo_style: "감성적인",
    color_presets: ["핑크", "화이트"],
    custom_color: "연보라",
    design_requests: "풍선 장식을 강조해주세요.",
    deposit_name: "홍길동",
    created_at: "2025-05-22T10:00:00Z",
    status: "unconfirmed",
  },
  {
    id: 2,
    name: "김예진",
    whatsapp: "01098765432",
    event_date: "2025-06-05",
    location: "부산 해운대구",
    service_time: "11:00",
    theme: "내추럴",
    event_name: "결혼식",
    photo_style: "내추럴",
    color_presets: ["그린"],
    custom_color: "",
    design_requests: "자연광 활용 부탁드립니다.",
    deposit_name: "김예진",
    created_at: "2025-05-21T14:30:00Z",
    status: "unconfirmed",
  },
  {
    id: 3,
    name: "이철수",
    whatsapp: "01055551111",
    event_date: "2025-06-10",
    location: "인천 송도",
    service_time: "16:00",
    theme: "모던",
    event_name: "브랜드 행사",
    photo_style: "클래식",
    color_presets: [],
    custom_color: "네이비",
    design_requests: "",
    deposit_name: "이철수",
    created_at: "2025-05-20T09:00:00Z",
    status: "unconfirmed",
  },
];

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

export default function ReservationContent() {
  return (
    <section className="flex h-[43rem] w-full flex-col justify-between rounded-xl bg-white p-8 text-black">
      {/* //TODO: 전체/확약/미확약에 따라 타이틀 다르게 들어감 */}
      <div className="flex flex-col gap-5">
        <header className="text-lg font-medium">전체 예약 목록</header>
        {/* //TODO: 서치컴포넌트 들어갈 예정 */}
        <div role="search">검색바</div>
        <div className="flex w-full items-center gap-2 text-base font-medium text-gray-400">
          {Object.entries(titleItems).map(([key, title]) => (
            <div className="shrink-0 grow basis-0">{title}</div>
          ))}
        </div>
        <ReservationList reservationData={mockData} />
      </div>

      <footer className="flex w-full items-center justify-between">
        <div className="text-base font-normal text-[#4763E4]">
          총 예약 (?)건
        </div>
        <nav>페이지네이션 컴포넌트</nav>
      </footer>
    </section>
  );
}
