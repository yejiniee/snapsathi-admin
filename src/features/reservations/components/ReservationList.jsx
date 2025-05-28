import ReservationItem from "./ReservationItem";

export default function ReservationList({ reservationData }) {
  return (
    <>
      {reservationData.map((reservation) => (
        <ReservationItem key={reservation.id} reservation={reservation} />
      ))}
    </>
  );
}
