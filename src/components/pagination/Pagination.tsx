import {useEffect, useState} from "react"; 
import { useNavigate, useLocation } from "react-router-dom";

//utils
import { searchAddFunc, searchGet } from "../../utils/common";

//style
import * as S from "./Pagination.Styles";

//svg
import {ReactComponent as IconChevronLeft2} from '../../assets/icons/ic_chevron_left_2.svg';
import {ReactComponent as IconChevronLeft} from '../../assets/icons/ic_chevron_left.svg';
import {ReactComponent as IconChevronRight2} from '../../assets/icons/ic_chevron_right_2.svg';
import {ReactComponent as IconChevronRight} from '../../assets/icons/ic_chevron_right.svg';

type Props = {
    totalPage : number
}

const Pagination = ({totalPage} : Props) => {
    const navigate = useNavigate();
    const { pathname, search } = useLocation();
    const [page, setPage] = useState(0);

    useEffect(()=>{
        if(page > 0){
            const searchUrl = searchAddFunc("page", page, null);
            navigate(searchUrl);
        }
    },[page]);

      //주소줄 변경 감지하여 검색값 셋팅
  useEffect(() => {
    if (search) {
      const page = searchGet("page") ? searchGet("page") : "1";
      if (page) setPage(Number(page));
    }else{
        setPage(1);
    }
  }, [search]);
    
    return (
        <S.Pagination>
            <S.PageBtn onClick={() => setPage(1)} btnAction={page !== 1}>
                <IconChevronLeft2/>
            </S.PageBtn>
            <S.PageBtn onClick={() => page - 1  > 0 && setPage(page - 1)} btnAction={page !== 1}>
                <IconChevronLeft/>
            </S.PageBtn>
            <S.Page><S.ViewPage>{page} </S.ViewPage><S.TotalPage> / {totalPage}</S.TotalPage></S.Page>
            <S.PageBtn onClick={() => page + 1 < totalPage+1 && setPage(page + 1)} btnAction={page !== totalPage}>
                <IconChevronRight/>
            </S.PageBtn>
            <S.PageBtn onClick={() => setPage(totalPage)}  btnAction={page !== totalPage}>
                <IconChevronRight2/>
            </S.PageBtn>
        </S.Pagination>
    );
}

export default Pagination;