import updateReservation from "@features/reservations/api/updateReservation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUpdateReservation({ closeModal, setIsEdit }) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, newFormData }) => updateReservation({ id, newFormData }),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["reservation", data.id]);
      alert("예약 정보가 성공적으로 수정되었습니다.");
      setIsEdit(false);
      closeModal();
    },
    onError: (error) => {
      alert("요청이 실패했습니다." + error.message);
    },
  });
}
