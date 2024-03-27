import React, { useState } from "react";
import debounce from "lodash.debounce";
import SearchIcon from "../../assets/svg/searchIcon";

type Props = {
  onSearch: (query: string) => void;
  debounceDelay?: number;
};

const Search: React.FC<Props> = ({ onSearch, debounceDelay = 300 }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = debounce((value: string) => {
    onSearch(value);
  }, debounceDelay);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    handleChange(value);
  };

  return (
    <div
      tabIndex={0}
      className="h-12 w-full  rounded-[16px] cursor-pointer flex   items-center pl-2 bg-white "
    >
      <label htmlFor="searchInput">
        <SearchIcon />
      </label>
      <input
        id="searchInput"
        placeholder="Search transactions..."
        className="appearance-none h-[98%] rounded-[inherit] w-full outline-none border-none pl-3 text-sm"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
