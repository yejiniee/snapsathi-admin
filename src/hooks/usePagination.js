import { useMemo } from "react";

export default function usePagination({
  totalCount,
  pageLimit = 6,
  currentPage,
  setCurrentPage,
  groupSize = 5,
}) {
  const totalPages = Math.ceil(totalCount / pageLimit);

  const groupStart = Math.floor((currentPage - 1) / groupSize) * groupSize + 1;
  const groupEnd = Math.min(groupStart + groupSize - 1, totalPages);

  const pageNumbers = useMemo(() => {
    return Array.from(
      { length: groupEnd - groupStart + 1 },
      (_, i) => groupStart + i,
    );
  }, [groupStart, groupEnd]);

  const goToPrevGroup = () => {
    if (groupStart > 1) setCurrentPage(groupStart - 1);
  };

  const goToNextGroup = () => {
    if (groupEnd < totalPages) setCurrentPage(groupEnd + 1);
  };

  return {
    totalPages,
    pageNumbers,
    groupStart,
    groupEnd,
    goToPrevGroup,
    goToNextGroup,
  };
}
