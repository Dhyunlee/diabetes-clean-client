import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { SearchForm } from "./styles";
const SearchArea = () => {
  const [searchText, setSearchText] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <SearchForm onSubmit={onSubmit}>
      <div className="search-inner">
        <div className="input-wrap">
          <input
            onChange={onChange}
            type="search"
            name="search"
            placeholder="검색어를 입력해주세요"
            autoComplete="off"
          />
        </div>
        <div className="search-icon" onClick={() => console.log("클릭")}>
          <MdSearch width={"100%"} size={25} color="gray" />
        </div>
      </div>
    </SearchForm>
  );
};

export default SearchArea;
