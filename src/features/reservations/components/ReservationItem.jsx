export default function ReservationItem({ item }) {
  // console.log("item", item);
  return (
    <div className="mb-5 flex w-full flex-col items-center">
      <div className="flex flex-col items-center gap-3 self-stretch">
        <div className="flex w-full items-center gap-2 text-sm font-normal text-gray-800">
          {/* 예약자명 */}
          <div className="flex shrink-0 grow basis-0 items-start self-stretch">
            {item.name}
          </div>
          {/* 이벤트 날짜 */}
          <div className="flex shrink-0 grow basis-0 items-start self-stretch">
            {item.event_date}
          </div>
          {/* 서비스 시간 */}
          <div className="flex shrink-0 grow basis-0 items-start self-stretch">
            {item.service_time}
          </div>
          {/* 서비스 장소 */}
          <div className="flex shrink-0 grow basis-0 items-start self-stretch">
            {item.location}
          </div>
          {/* 번호 */}
          <div className="flex shrink-0 grow basis-0 items-start self-stretch">
            {item.whatsapp}
          </div>
          {/* 예약 상태- 확약/미확약 */}
          <div className="flex shrink-0 grow basis-0 items-start self-stretch">
            {item.status}
          </div>
          {/* 폼 생성 시간 */}
          <div className="flex shrink-0 grow basis-0 items-start self-stretch">
            {item.created_at}
          </div>
          {/* //TODO: 햄버거 아이콘 클릭 시 더보기/수정 가능 */}
          <button className="flex shrink-0 grow basis-0 items-start">
            ...
          </button>
        </div>
        <div className="h-[0.0625rem] w-full bg-gray-100"></div>
      </div>
    </div>
  );
}
