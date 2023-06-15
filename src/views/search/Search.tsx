//style
import * as S from "./Search.styled";
import * as C from "../../assets/styles/commeStyle";

//component
import SearchInput from "../../components/inputs/searchInput/SearchInput";
import Pagination from "../../components/pagination/Pagination";
import Talble from "../../components/table/Table";

const Search = () => {
  return (
    <S.Search>
      <S.Searcharea>
        <SearchInput />
      </S.Searcharea>
      <C.Title>총 : 000마리</C.Title>
      <Talble/>
      <Pagination totalPage={1000} />
    </S.Search>
  );
};

export default Search;
