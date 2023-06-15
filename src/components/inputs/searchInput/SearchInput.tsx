import {useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";

//style
import * as S from "./SearchInput.Styles";

//svg
import {ReactComponent as IconSearchLined} from "../../../assets/icons/ic_search_lined.svg";

//utils
import { searchAddFunc } from "../../../utils/common";


const SearchInput = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const onClickSubmit = () => {
        let searchUrl = `/admin/inspectionEquipment?page=1&keyword=${keyword}`;

        if(!pathname.includes("inspectionEquipment/detail")){
            searchUrl = searchAddFunc("keyword", keyword, null);
        }
      
        navigate(searchUrl);
    };

    return <S.SearchInput>
        <S.Input
            placeholder="번호 입력"
            value={keyword}
            onChange={(e:any)=>setKeyword(e.target.value)}
            onKeyDown={(e:any)=> {if (e.code === "Enter" || e.code === "NumpadEnter") onClickSubmit()}}
        />
        <IconSearchLined onClick={onClickSubmit}/>
    </S.SearchInput>
}

export default SearchInput;