import { useState } from "react";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div role="search" className="flex items-center">
        <div className="relative w-full">
          <input
            className="h-[40px] w-full rounded-[6px] border-[1.3px] pl-10 shadow-sm"
            type="text"
            placeholder="검색어를 입력해주세요"
            value={inputValue}
            onChange={handleInputChange}
          />
          <img
            className="absolute left-3 top-1/2 -translate-y-1/2 transform"
            src="./src/assets/search.svg"
            alt="검색하기"
          />
        </div>
      </div>
    </>
  );
}
