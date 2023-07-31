import { useEffect, useRef, useState } from "react";
import { MdSearch, MdClear } from "react-icons/md";
import { SearchForm } from "./styles";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [isClick, setIsClick] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchText.length) {
      setIsClick(true);
    }
  }, [searchText.length]);

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
            ref={inputRef}
            onChange={onChange}
            type="search"
            name="search"
            placeholder="검색어를 입력해주세요"
            autoComplete="off"
          />
          <span
            className={`clear-btn ${searchText.length && isClick ? "on" : ""}`}
            onClick={() => {
              if (inputRef.current) {
                setIsClick(false);
                (inputRef.current as HTMLInputElement).value = "";
              }
            }}
          >
            <MdClear />
          </span>
        </div>
        <div className="search-icon" onClick={() => console.log("클릭")}>
          <MdSearch width={"100%"} size={25} color="gray" />
        </div>
      </div>
    </SearchForm>
  );
};

export default SearchBar;
