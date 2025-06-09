import { useMutation, useQueryClient } from "@tanstack/react-query";
import updateInquiryStatus from "../api/updateInquiryStatus";

export default function useUpdateInquiryStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateInquiryStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(["inquiry"]);
    },
  });
}
