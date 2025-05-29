import deleteReservation from "@features/reservations/api/deleteReservation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteReservation({ closeModal }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteReservation(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["reservations"]);
      closeModal();
    },
    onError: (error) => {
      alert("삭제가 실패했습니다: " + error.message);
    },
  });
}
