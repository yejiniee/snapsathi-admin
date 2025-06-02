export default function Pagination({
  totalPages,
  pageNumbers,
  groupStart,
  groupEnd,
  goToPrevGroup,
  goToNextGroup,
  page,
  setPage,
}) {
  return (
    <nav className="flex items-start rounded-lg border-[1px] border-gray-300 bg-white">
      <button
        onClick={goToPrevGroup}
        disabled={groupStart === 1}
        className="h-8 w-8 items-center rounded-l-md border-[1px] border-gray-300 px-2 text-sm hover:bg-gray-200 disabled:bg-white disabled:text-gray-400"
      >
        &lt;
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`h-8 w-8 items-center border-[1px] border-gray-300 px-2 text-sm font-medium ${
            num === page ? "bg-[#415ac7] text-white" : "text-gray-700"
          } hover:bg-indigo-300`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={goToNextGroup}
        disabled={groupEnd === totalPages}
        className="h-8 w-8 items-center rounded-r-md border-[1px] border-gray-300 px-2 text-sm hover:bg-gray-200 disabled:bg-white disabled:text-gray-400"
      >
        &gt;
      </button>
    </nav>
  );
}
