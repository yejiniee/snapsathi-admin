import { useQuery } from "@tanstack/react-query";
import getReservations from "../api/getReservations";

/**
 * @param {"confirmed" | "unconfirmed" | undefined} selectedTabLabel
 */
export default function useGetReservations({ status, page = 1, limit }) {
  return useQuery({
    queryKey: ["reservations", status, page],
    queryFn: () => getReservations({ status, page, limit }),
    keepPreviousData: true,
    staleTime: 1000 * 30,
  });
}
