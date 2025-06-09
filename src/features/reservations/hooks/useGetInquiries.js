import { useQuery } from "@tanstack/react-query";
import getInquiries from "../api/getInquiries";

export default function useGetInquiries({ page = 1, limit }) {
  return useQuery({
    queryKey: ["inquiries", page],
    queryFn: () => getInquiries({ page, limit }),
    keepPreviousData: true,
    staleTime: 1000 * 30,
  });
}
