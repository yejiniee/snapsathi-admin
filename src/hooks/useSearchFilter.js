import { useMemo, useState } from "react";

export default function useSearchFilter(data) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(searchKeyword.toLowerCase()),
      ),
    );
  }, [data, searchKeyword]);

  return { searchKeyword, handleSearchInputChange, filteredData };
}
