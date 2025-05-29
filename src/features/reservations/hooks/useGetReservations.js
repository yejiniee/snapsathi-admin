import { useQuery } from "@tanstack/react-query";
import getReservations from "../api/getReservations";

/**
 * @param {"confirmed" | "unconfirmed" | undefined} selectedTabLabel
 */
export default function useGetReservations(selectedTabLabel) {
  return useQuery({
    queryKey: ["reservations", selectedTabLabel],
    queryFn: () => getReservations(selectedTabLabel),
    keepPreviousData: true,
    staleTime: 1000 * 30,
  });
}
