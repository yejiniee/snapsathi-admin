import useModalStore from "@/stores/useModalStore";

export default function ReservationItem({ reservation }) {
  const { openModal } = useModalStore();

  return (
    <div
      onClick={() => openModal("reservation", reservation)}
      className="flex w-full cursor-pointer flex-col items-center hover:bg-gray-50"
    >
      <div className="flex flex-col items-center gap-3 self-stretch pt-3">
        <div className="flex w-full items-center gap-2 text-sm font-normal text-gray-800">
          {/* 예약자명 */}
          <div className="flex shrink-0 grow basis-0 items-center self-stretch">
            {reservation.name}
          </div>
          {/* 이벤트 날짜 */}
          <div className="flex shrink-0 grow basis-0 items-center self-stretch">
            {reservation.event_date}
          </div>
          {/* 서비스 시간 */}
          <div className="flex shrink-0 grow basis-0 items-center self-stretch">
            {reservation.service_hours}
          </div>
          {/* 서비스 장소 */}
          <div className="flex shrink-0 grow basis-0 items-center self-stretch">
            {reservation.location}
          </div>
          {/* 번호 */}
          <div className="flex shrink-0 grow basis-0 items-center self-stretch">
            {reservation.whatsapp}
          </div>
          {/* 예약 상태- 확약/미확약 */}
          <div className="flex shrink-0 grow basis-0 items-center self-stretch">
            {reservation.status}
          </div>
          {/* 폼 생성 시간 */}
          <div className="flex shrink-0 grow basis-0 items-center self-stretch">
            {/* // TODO: 유틸 함수로 빼기 */}
            {new Date(reservation.created_at).toLocaleString("ko-KR", {
              timeZone: "Asia/Seoul",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
        <div className="h-[0.0625rem] w-full bg-gray-100"></div>
      </div>
    </div>
  );
}
