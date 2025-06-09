import { useQuery } from "@tanstack/react-query";
import getInquiryById from "../api/getInquiryById";

export default function useGetInquiryById(inquiryId) {
  return useQuery({
    queryKey: ["inquiry", inquiryId],
    queryFn: () => getInquiryById(inquiryId),
    enabled: !!inquiryId,
    staleTime: 1000 * 30,
  });
}
