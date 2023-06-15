import { useRef, useEffect, useState } from "react";
import { useLocation, useNavigate, createSearchParams } from "react-router-dom";

//style
import * as S from "./InfoSelect.Styles";

//svg
import {ReactComponent as IconNavArrowDown} from "../../assets/icons/ic_nav_arrow_down.svg";
import { ReactComponent as IconChevronCheck } from "../../assets/icons/ic_chevron_check.svg";

type Props = {
    label : string
    select: any | null;
    datas: any | null;
    type: string;
    onClickSelect : React.Dispatch<React.SetStateAction<any>>;
    readOnly ?: boolean;
  };

const InfoSelect = ({label = "label", select, datas, type, onClickSelect, readOnly=true }: Props) => {
    const selectRef: any = useRef();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      window.addEventListener("click", handleClose);
      return () => {
        window.removeEventListener("click", handleClose);
      };
    }, []);

    const handleClose = (e: any) => {
        if (!selectRef.current || !selectRef.current.contains(e.target))
          setIsOpen(false);
    };

    return <S.InfoSelect ref={selectRef} className={type}>
        <S.Label>{label}</S.Label>
        <S.InputBox onClick={()=>setIsOpen(!isOpen)}>
          {
            select?.name
            ?<S.Span>{select?.name}</S.Span>
            :<S.Placeholder>선택</S.Placeholder>
          }
            <IconNavArrowDown/>
        </S.InputBox>
        {isOpen && readOnly && (
        <S.SelectUl>
          {datas && datas?.length > 0 &&
            datas?.map((data :any) => (
              <S.SelectLi action={data?.key === select?.key} onClick={()=>onClickSelect(data)}>
              {data?.name}
              {data?.key === select?.key && <IconChevronCheck />}
            </S.SelectLi>
            ))}
        </S.SelectUl>
      )}
    </S.InfoSelect>
}
export default InfoSelect;