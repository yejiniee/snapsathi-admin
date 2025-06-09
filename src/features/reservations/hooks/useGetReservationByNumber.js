import { useQuery } from "@tanstack/react-query";
import getReservationByNumber from "../api/getReservationByNumber";

export default function useGetReservationByNumber(reservationNumber) {
  return useQuery({
    queryKey: ["reservation", reservationNumber],
    queryFn: () => getReservationByNumber(reservationNumber),
    enabled: !!reservationNumber,
    staleTime: 1000 * 30,
  });
}
