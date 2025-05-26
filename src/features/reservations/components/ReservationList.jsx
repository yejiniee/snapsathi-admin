import ReservationItem from "./ReservationItem";

export default function ReservationList({ reservationData }) {
  return (
    <>
      {reservationData.map((item) => (
        <ReservationItem key={item.id} item={item} />
      ))}
    </>
  );
}
